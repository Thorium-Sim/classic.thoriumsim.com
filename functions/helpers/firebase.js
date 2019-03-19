const admin = require("firebase-admin");

admin.initializeApp({
  storageBucket: "thorium-sim.appspot.com"
});
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
const firestore = admin.firestore();
const auth = admin.auth();
const storage = admin.storage();
firestore.settings({});

module.exports.firestore = firestore;
module.exports.auth = auth;
module.exports.storage = storage;
