import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAnvAkc3NIwrkvBdUEv47iI40GDWUed720',
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

const dbFirebase = firebase.firestore();
const authFirebase = firebase.auth();
const googleProvider = firebase.auth.GoogleAuthProvider;

export { dbFirebase, authFirebase, googleProvider };
