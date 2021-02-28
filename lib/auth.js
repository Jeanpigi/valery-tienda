import { authFirebase, googleProvider } from '@lib/firebase';

// Auth firbase
export const Register = async (email, password) =>
  await authFirebase
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return {
        errorCode,
        errorMessage
      }
    });

export const SignIn = async (email, password) =>
  await authFirebase
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return {
        errorCode,
        errorMessage
      }
    });

export const SignInGoogle = async () => {
  const gProvider = new googleProvider();
  return await authFirebase
    .signInWithPopup(gProvider)
};

export const SignOut = async () => await authFirebase.signOut();


export const updateEmail = async (email) => {
  const user = authFirebase.currentUser;
  await user.updateEmail(email).then(() => {
    console.log('Email successfully update')
  }).catch(error => console.log(error));
}

export const updatePassword = async (password) => {
  const user = authFirebase.currentUser;
  await user.updatePassword(password).then(() => {
    console.log('Password succesfully update');
  }).catch(error => console.log(error));
}

export const resetEmail = async (email) => {
  const auth = authFirebase
  await auth.sendPasswordResetEmail(email).then(() => {
    console.log('Email was sending');
  }).catch(error => console.log(error));
}
