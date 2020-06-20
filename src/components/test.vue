<template>
  <b-row>
    <b-col cols="12">
      <h3 align="left">
        <b-link href="#/add-board" >Ajouter Patiente</b-link>
        
      </h3>
      <div class="home">
      <v-btn>test</v-btn>
      </div>
      <b-table striped hover :items="boards" :fields="fields">
        <template v-slot:cell(actions)="data">
          <b-button @click.stop="details(data.item)" variant="primary">Details</b-button>
          <v-btn variant="danger" @click.stop="deleteboard(data.item)">Delete</v-btn>
          
        </template>
        <div class="h2 mb-0">
    <b-icon-arrow-up></b-icon-arrow-up>
    <b-icon-exclamation-triangle-fill></b-icon-exclamation-triangle-fill>
  </div>
      </b-table>
    </b-col>
  </b-row>
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
</script>

<style>
  .table {
    width: 96%;
    margin: 0 auto;
  }
</style>