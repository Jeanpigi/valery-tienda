import { authFirebase, googleProvider } from '@lib/firebase';

// Auth firbase
export const Register = async (email, password) =>{
  return await authFirebase.createUserWithEmailAndPassword(email, password)
};

export const SignIn = async (email, password) => {
  return await authFirebase.signInWithEmailAndPassword(email, password)
};

export const SignInGoogle = async () => {
  const gProvider = new googleProvider();
  return await authFirebase.signInWithPopup(gProvider)
};

export const SignOut = async () => await authFirebase.signOut();


export const onAuthStateChanged =  (onChange) => {
  return  authFirebase.onAuthStateChanged((user) => {
    const { email } = user
    const normalizedUser = user ? email : null

    onChange(normalizedUser)
  })
}
