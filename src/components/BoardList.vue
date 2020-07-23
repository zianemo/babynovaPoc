<template>
  <b-container>
    <b-row>
      <b-col cols="12">
        <v-btn class="mx-2" fab dark color="#513c79" href="#/add-board">
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
        
          <b-form-group
            label=""
            label-cols-sm="3"
            label-align-sm="right"
            label-size="sm"
            label-for="filterInput"
            class="mb-0"
          >
            <b-input-group size="sm">
              <b-form-input
                v-model="filter"
                type="search"
                id="filterInput"
                placeholder="Recherche par Nom , Prénom , ..."
              ></b-form-input>
              <b-input-group-append>
                <b-button :disabled="!filter" @click="filter = ''" variant="outline-info">Effacer</b-button>
              </b-input-group-append>
            </b-input-group>
          </b-form-group>
        

        
        <b-table
          striped
          hover
          stacked="md"
          :items="boards"
          :fields="fields"
          :current-page="currentPage"
          :per-page="perPage"
          :filter="filter"
          :filterIncludedFields="filterOn"
          :sort-by.sync="sortBy"
          :sort-desc.sync="sortDesc"
          :sort-direction="sortDirection"
          @filtered="onFiltered"
          @row-clicked="details"
          :busy="isBusy"
        >
        <template v-slot:table-busy>
        <div class="text-center">
          <b-spinner class="align-middle" variant="primary"></b-spinner>
          <strong>Chargement...</strong>
        </div>
      </template>
          <template v-slot:cell(actions)="data">
            <v-icon color="red" medium @click="deleteboard(data.item)">mdi-delete</v-icon>
          </template>
          
        </b-table>
        </b-col>
        </b-row>
        <b-row>
      

        <b-col></b-col>
        <b-col></b-col>
        <b-col></b-col>
        <b-col>
          <b-pagination
            v-model="currentPage"
            :total-rows="totalRows"
            :per-page="perPage"
            align="fill"
            size="sm"
            class="my-0"
          ></b-pagination>
        </b-col>
        <b-col>
          <b-form-group
            label= ""
            label-align-sm="right"
            label-size="sm"
            label-for="perPageSelect"
            class="mb-0"
          >
            <b-form-select v-model="perPage" id="perPageSelect" size="sm" :options="pageOptions"></b-form-select>
             
          </b-form-group>
          {{this.totalRows}} patientes
        </b-col>

    </b-row>
  </b-container>
</template>

<script>
import firebase from "../Firebase";
import router from "../router";

export default {
  name: "BoardList",
  data() {
    return {
      isBusy: true,
      fields: [
        {
          key: "firstName",
          label: "Prénom",
          sortable: true,
          class: "text-left"
        },
        { key: "lastName", label: "Nom", sortable: true, class: "text-left" },
        {
          key: "expectedTerm",
          label: "Terme prévu",
          sortable: true,
          class: "text-left"
        },
        {
          key: "createdBy",
          label: "Créé par",
          sortable: true,
          class: "text-left"
        },
        {
          key: "creationDate",
          label: "Date de création",
          sortable: true,
          class: "text-left"
        },
        { key: "actions", label: "Action", class: "text-center" }
      ],
      boards: [],
      errors: [],
      ref: firebase.firestore().collection("users"),
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [5, 10, 15],
      filter: null,
      filterOn: []
    };
  },
  created() {
    this.ref.onSnapshot(querySnapshot => {
      this.boards = [];
      querySnapshot.forEach(doc => {
        this.boards.push({
          key: doc.id,
          firstName: doc.data().firstName,
          lastName: doc.data().lastName,
          expectedTerm: doc.data().expectedTerm,
          createdBy: doc.data().createdBy,
          creationDate: doc.data().creationDate,
          
        });
      });
      this.totalRows = this.boards.length;
      this.isBusy = !this.isBusy;
      
    });
  },
  computed: {
    sortOptions() {
      // Create an options list from our fields
      return this.fields
        .filter(f => f.sortable)
        .map(f => {
          return { text: f.label, value: f.key };
        });
    }
  },
  mounted() {
    // Set the initial number of items
    this.totalRows = this.boards.length;
    
  },
  methods: {
    details(board) {
      router.push({ name: "ShowBoard", params: { id: board.key } });
    },
    deleteboard(board) {
      if (confirm("Voulez vous vraiment supprimer le dossier du patient?")) {
        firebase
          .firestore()
          .collection("users")
          .doc(board.key)
          .delete()
          .then(() => {
            router.push({
              name: "BoardList"
            });
          })
          .catch(error => {
            alert("Error removing document: ", error);
          });
      }
      this.isBusy = !this.isBusy;
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
  }
};
</script>

<style>
.table {
  width: 96%;
  margin: 0 auto;
}
</style>
