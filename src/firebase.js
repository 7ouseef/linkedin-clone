import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBA9y4ZEPKPpdjZ5pGbRXnTbehCkovlUew",
    authDomain: "linkedin-clone-ecc02.firebaseapp.com",
    projectId: "linkedin-clone-ecc02",
    storageBucket: "linkedin-clone-ecc02.appspot.com",
    messagingSenderId: "460950873462",
    appId: "1:460950873462:web:b74e3b3ccddecb03ef4657"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

export {db,auth};