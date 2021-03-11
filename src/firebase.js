// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqcudhspOV_9kZjEQD41nw5QrCDzzAujg",
  authDomain: "clone-3ad94.firebaseapp.com",
  projectId: "clone-3ad94",
  storageBucket: "clone-3ad94.appspot.com",
  messagingSenderId: "757615712149",
  appId: "1:757615712149:web:4d2ef835b21e717988c89c",
  measurementId: "G-M1MJS59SG4"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };




// https://clone-3ad94.web.app
