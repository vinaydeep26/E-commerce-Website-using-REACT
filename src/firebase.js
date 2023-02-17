// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCa5RXncqaYoa2efWkyVEQaVOMu-fJjatY",
    authDomain: "ecommerceshop26.firebaseapp.com",
    projectId: "ecommerceshop26",
    storageBucket: "ecommerceshop26.appspot.com",
    messagingSenderId: "275045656558",
    appId: "1:275045656558:web:8bf5635f7cf26c222e50ff",
    measurementId: "G-ZEL11Y40RB"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { auth, db };