<template>
  <v-app>
    <v-app-bar
      app
      color="light"
      
    >
      <div class="d-flex align-center">
        <v-img
          alt="BabyNova Logo"
          class="shrink mr-2"
          contain
          src="https://www.babynova.be/_images/frontend/logo_white.png"
          transition="scale-transition"
          width="40"
        />
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
  
</template>

<script>

export default {
  name: 'app',
}
</script>
