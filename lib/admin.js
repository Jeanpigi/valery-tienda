
const admin = require("firebase-admin");

const serviceAccount = require("./valery.json");

!admin.apps.length && admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

export const dbFirestore = admin.firestore();