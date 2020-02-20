import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import VueTextAreaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';
import * as keys from './config'; 

Vue.use( VueTextAreaAutosize );

Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: keys.apiKey,
  authDomain: keys.authDomain,
  databaseURL: keys.databaseURL,
  projectId: keys.projectId,
  storageBucket: keys.storageBucket,
  messagingSenderId: keys.messagingSenderId,
  appId: keys.appId
});


export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h( App )
}).$mount( '#app' )
