import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAot-_XqjteKabY7ljWctIxpRISr6c2n9s",
  authDomain: "challenge-5faf6.firebaseapp.com",
  databaseURL: "https://challenge-5faf6.firebaseio.com",
  projectId: "challenge-5faf6",
  storageBucket: "challenge-5faf6.appspot.com",
  messagingSenderId: "661406725499",
  appId: "1:661406725499:web:45d775916eceb44a60b9de",
  measurementId: "G-WELRWG0QZJ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };