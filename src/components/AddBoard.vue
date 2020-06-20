<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Add Board
        <b-link href="#/">(Board List)</b-link>
      </h2>
      <b-jumbotron>
        <b-form @submit="onSubmit">
<b-form-group id="firstNameGroup"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Prénom">
            <b-form-input id="firstName" v-model.trim="board.firstName"></b-form-input>
          </b-form-group>
          <b-form-group id="LastNameGroup"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Nom">
            <b-form-input id="lastName" v-model.trim="board.lastName"></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="primary">Save</b-button>
        </b-form>
      </b-jumbotron>
    </b-col>
  </b-row>
</template>

<script>

import firebase from '../Firebase'
import router from '../router'

export default {
  name: 'AddBoard',
  data () {
    return {
      ref: firebase.firestore().collection('users'),
      board: {}
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()

      this.ref.add(this.board).then(() => {
        this.board.lastName = ''
        this.board.firstName = ''
        router.push({
          name: 'BoardList'
        })
      })
      .catch((error) => {
        alert("Error adding document: ", error);
      });
    }
  }
}
</script>

<style>
  .jumbotron {
    padding: 2rem;
  }
</style>
