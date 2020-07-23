import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(BootstrapVue)

new Vue({
  data: {
    creationDate: new Date().toISOString().substr(0, 10) // currentDate
  },
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
