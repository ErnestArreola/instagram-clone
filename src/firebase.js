import firebase from "firebase";
// import { firebase } from '@firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyB1csE-QsEqRMouq4nXsupD_m2RApHr164",
    authDomain: "instagram-clone-b8046.firebaseapp.com",
    projectId: "instagram-clone-b8046",
    storageBucket: "instagram-clone-b8046.appspot.com",
    messagingSenderId: "647393911024",
    appId: "1:647393911024:web:740325644a22af48586235",
    measurementId: "G-5B2NH38N6P"
  };


const firebaseApp =  firebase.initializeApp(firebaseConfig);


const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();


export {db, auth, storage};