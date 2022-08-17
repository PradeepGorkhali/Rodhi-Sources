import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD_1liVEZ2oMwyb2u8mfMs0f6ImSUxQpzM",
  authDomain: "rodhi-sources.firebaseapp.com",
  projectId: "rodhi-sources",
  storageBucket: "rodhi-sources.appspot.com",
  messagingSenderId: "628051425200",
  appId: "1:628051425200:web:2986519f9d85093cd50875",
  measurementId: "G-NSLLN2B7X8"
});

var db = firebaseApp.firestore();

export {db};