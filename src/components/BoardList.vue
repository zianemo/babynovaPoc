<template>
  <div class="patientsBoard" width="90%">
  <b-row>
    <b-col cols="12">
      <v-btn class="mx-2" fab dark color="indigo" href="#/add-board" >
      <v-icon dark>mdi-plus</v-icon>
    </v-btn>
      <b-table striped hover :items="boards" :fields="fields">
        <template v-slot:cell(actions)="data">
        <v-icon color="green darken-2"
        left
        medium
        @click="details(data.item)"
      >
        mdi-eye-outline
      </v-icon>
        <v-icon color="red"
        medium
        @click="deleteboard(data.item)"
      >
        mdi-delete
      </v-icon>
          
        </template>
      </b-table>
    </b-col>
  </b-row>
  </div>
</template>

<script>

import firebase from '../Firebase'
import router from '../router'

export default {
  name: 'BoardList',
  data () {
    return {
      fields: [
        { key: 'firstName', label: 'Prénom', sortable: true, 'class': 'text-left' },
        { key: 'lastName', label: 'Nom', sortable: true, 'class': 'text-left' },
        { key: 'expectedTerm', label: 'Terme prévu', sortable: true, 'class': 'text-left' },
        { key: 'createdBy', label: 'Créé par', sortable: true, 'class': 'text-left' },
        { key: 'creationDate', label: 'Date de création', sortable: true, 'class': 'text-left' },
        { key: 'actions', label: 'Action', 'class': 'text-center' }
      ],
      boards: [],
      errors: [],
      ref: firebase.firestore().collection('users'),
    }
  },
  created () {
    this.ref.onSnapshot((querySnapshot) => {
      this.boards = [];
      querySnapshot.forEach((doc) => {
        this.boards.push({
          key: doc.id,
          firstName: doc.data().firstName,
          lastName: doc.data().lastName,
          expectedTerm: doc.data().expectedTerm,
          createdBy: doc.data().createdBy,
          creationDate: doc.data().creationDate
        });
      });
    });
  },
  methods: {
    details (board) {
      router.push({ name: 'ShowBoard', params: { id: board.key }})
    },
    deleteboard (board) {
      if(confirm("Voulez vous vraiment supprimer le dossier du patient?")){
      firebase.firestore().collection('users').doc(board.key).delete().then(() => {
        router.push({
          name: 'BoardList'
        })
      }).catch((error) => {
        alert("Error removing document: ", error);
      });
    }
  }
  }
}
</script>

<style>
  .table {
    width: 96%;
    margin: 0 auto;
  }
</style>
