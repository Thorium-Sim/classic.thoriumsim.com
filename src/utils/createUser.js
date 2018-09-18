import { firestore } from "./firebase";

export default function createUser(result) {
  //Create a Firestore user to reference this user
  if (result.additionalUserInfo.isNewUser) {
    return firestore
      .doc(`users/${result.user.uid}`)
      .set({
        username: result.additionalUserInfo.username || null,
        displayName: result.user.displayName,
        email: result.user.email,
        phoneNumber: result.user.phoneNumber,
        photoURL: result.user.photoURL,
        roles: {
          admin:
            // A few defaults for creating admins automatically
            result.user.email.indexOf("alexanderson1993@") > -1 ? true : false
        },
        provider:
          result.additionalUserInfo.provider ||
          result.additionalUserInfo.providerId
      })
      .then(() => {})
      .catch(err => {
        console.error(err);
      });
  }
  return Promise.resolve();
}
