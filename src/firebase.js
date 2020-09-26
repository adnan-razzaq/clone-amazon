import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  apiKey: "AIzaSyBoSyY76VR13hRktK_eJ9HWuQxfuQBuddg",
  authDomain: "clone-9b55a.firebaseapp.com",
  databaseURL: "https://clone-9b55a.firebaseio.com",
  projectId: "clone-9b55a",
  storageBucket: "clone-9b55a.appspot.com",
  messagingSenderId: "900791749343",
  appId: "1:900791749343:web:9cc6386565bb0b10abb76a",
  measurementId: "G-PGV4CCFFBL",
});
const db = firebase.firestore();
export const auth = firebase.auth();
