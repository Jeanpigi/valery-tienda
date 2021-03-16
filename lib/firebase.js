import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAnvAkc3NIwrkvBdUEv47iI40GDWUed720",
  authDomain: "valery-store.firebaseapp.com",
  projectId: "valery-store",
  storageBucket: "valery-store.appspot.com",
  messagingSenderId: "114379606182",
  appId: "1:114379606182:web:3b13f4a7b187973e314c67",
  measurementId: "G-E54KPBLE8E"
};

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

const dbFirestore = firebase.firestore();
const authFirebase = firebase.auth();
const storageFirebase = firebase.storage();
const googleProvider = firebase.auth.GoogleAuthProvider;


export { dbFirestore, authFirebase, storageFirebase, googleProvider };
