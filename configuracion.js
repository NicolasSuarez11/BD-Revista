//import firebase from "firebase/app";
//import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB_-ZW0rlMR72q8GLqy5yvHjCFaGN-Xlqk",
  authDomain: "bd-revista-b1a50.firebaseapp.com",
  projectId: "bd-revista-b1a50",
  storageBucket: "bd-revista-b1a50.appspot.com",
  messagingSenderId: "844178724423",
  appId: "1:844178724423:web:882c9e45f62fee48750362"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();
