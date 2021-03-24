
const admin = require("firebase-admin");

const serviceAccount = require("./valery.json");

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
}

const dbFirestore = admin.firestore();
const authFirebase = admin.auth();
const storageFirebase = admin.storage();
const googleProvider = admin.auth.GoogleAuthProvider;


export { dbFirestore, authFirebase, storageFirebase, googleProvider };