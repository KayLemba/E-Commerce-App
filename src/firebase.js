import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA366H7LAI6ncPq8Kn_p1tpIklxmXYjWb8",
    authDomain: "my-amzone-clone.firebaseapp.com",
    projectId: "my-amzone-clone",
    storageBucket: "my-amzone-clone.appspot.com",
    messagingSenderId: "270485147977",
    appId: "1:270485147977:web:879863a8c0d3a2e8050a98",
    measurementId: "G-KYJSCJ6XSJ"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };