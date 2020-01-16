import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// Your web app's Firebase configuration
var config = {
  apiKey: "AIzaSyDaCiEXF7UsAkBxnUOmymG81G4J5494cZs",
  authDomain: "fireapp0498.firebaseapp.com",
  databaseURL: "https://fireapp0498.firebaseio.com",
  projectId: "fireapp0498",
  storageBucket: "fireapp0498.appspot.com",
  messagingSenderId: "372080592890",
  appId: "1:372080592890:web:8d6978a240b8ad77b00643",
  measurementId: "G-L5X8PX4XNP"
};
// Initialize Firebase

firebase.initializeApp(config);

// firebase.firestore().settings({ timestampsInSnapshots: true });
firebase.firestore().settings({});

// firebase.analytics();

export default firebase;
