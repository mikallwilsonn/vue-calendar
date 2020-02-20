import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import VueTextAreaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use( VueTextAreaAutosize );

Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: "AIzaSyDMYZm1EAaJ5Zb5yMms2JSRME5Mi895xA8",
  authDomain: "vue-calendar-f2b0d.firebaseapp.com",
  databaseURL: "https://vue-calendar-f2b0d.firebaseio.com",
  projectId: "vue-calendar-f2b0d",
  storageBucket: "vue-calendar-f2b0d.appspot.com",
  messagingSenderId: "772483231562",
  appId: "1:772483231562:web:ae6cd98f2fe591e4f91bb3"
});


export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h( App )
}).$mount( '#app' )
