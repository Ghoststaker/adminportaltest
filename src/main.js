import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

const firebaseConfig = require('./firebaseConfig.js');

firebase.auth().onAuthStateChanged(() => {
    new Vue({
      router,
      render: h => h(App)
    }).$mount('#app');
  });
