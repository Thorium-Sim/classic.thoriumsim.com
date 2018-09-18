import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCatCmTnfrS89cqjYa91SztWT1lK69zZ1U",
  authDomain: "thorium-sim.firebaseapp.com",
  databaseURL: "https://thorium-sim.firebaseio.com",
  projectId: "thorium-sim",
  storageBucket: "thorium-sim.appspot.com",
  messagingSenderId: "232540755894"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
auth.getUser = function() {
  if (!this.currentUser) return;
  return this.currentUser.isAnonymous ? null : this.currentUser.uid;
};

export const google = new firebase.auth.GoogleAuthProvider();
// export const facebook = new firebase.auth.FacebookAuthProvider();
// export const twitter = new firebase.auth.TwitterAuthProvider();

export let firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);

export function logout() {
  return auth.signOut();
}

export function login(email, pw) {
  return auth.signInWithEmailAndPassword(email, pw);
}

export function resetPassword(email) {
  return auth.sendPasswordResetEmail(email);
}

export function saveUser(user) {
  return firestore
    .collection("users")
    .doc(user.uid)
    .set({
      email: user.email,
      uid: user.uid
    })
    .then(() => user);
}
