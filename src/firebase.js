import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDZ36TDLpcQhQet89pWGHz-dLnuxpJfXc4",
  authDomain: "clone-a0fa5.firebaseapp.com",
  databaseURL: "https://clone-a0fa5.firebaseio.com",
  projectId: "clone-a0fa5",
  storageBucket: "clone-a0fa5.appspot.com",
  messagingSenderId: "584214647617",
  appId: "1:584214647617:web:4f14b4133d81736088c7c0",
  measurementId: "G-YLPR669EGJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
