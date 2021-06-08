import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCniVfWt6VM8LfejRI1EuWqdhqv335uiY8",
    authDomain: "mon-portfolio-e9d2a.firebaseapp.com",
    projectId: "mon-portfolio-e9d2a",
    storageBucket: "mon-portfolio-e9d2a.appspot.com",
    messagingSenderId: "1039741393766",
    appId: "1:1039741393766:web:35bc023f2de36fa3e946a7",
    measurementId: "G-DP50S7DCJE"
});

const db = firebaseApp.firestore();

export default db ;

