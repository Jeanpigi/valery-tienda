import { authFirebase, googleProvider } from './firebase';

// Auth firbase
export const Register = async (email, password) => {
    return await authFirebase.createUserWithEmailAndPassword(email, password).then(user => {
        console.log(user);
    }).catch(error => {
        console.log(error);
    })
}

export const SignIn = async (email, password) => {
    return await authFirebase.signInWithEmailAndPassword(email, password).then(result => {
        console.log(result);
    }).catch(error => {
        console.log(error);
    })
}

export const SignInGoogle = async () => {
    const gProvider = new googleProvider;
    return await authFirebase.signInWithPopup(gProvider).then(result => {
        console.log(result);
    }).catch(error => {
        console.log(error);
    })
}

export const SignOut = async () => {
    return await authFirebase.signOut();
}

export const onAuthStateChange = async (onChange) => {
    return await authFirebase().onAuthStateChange(onChange);
}