import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDkFyeLqU4pEw2TP9CSJkAIgv7GzQUsOl0",
  authDomain: "pullups-c8c5f.firebaseapp.com",
  databaseURL: "https://pullups-c8c5f.firebaseio.com",
  projectId: "pullups-c8c5f",
  storageBucket: "pullups-c8c5f.appspot.com",
  messagingSenderId: "1015031155940",
  appId: "1:1015031155940:web:d4f2dabace76c8cfaa30f1",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
