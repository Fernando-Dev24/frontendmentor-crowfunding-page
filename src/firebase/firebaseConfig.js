import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
   apiKey: "AIzaSyCX1LQcO_PuLEVKItsOHZVsvFAY7wr6r3M",
   authDomain: "frontendmentor-app-crowfunding.firebaseapp.com",
   projectId: "frontendmentor-app-crowfunding",
   storageBucket: "frontendmentor-app-crowfunding.appspot.com",
   messagingSenderId: "596011208329",
   appId: "1:596011208329:web:9b21a5addce27c94160058"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;