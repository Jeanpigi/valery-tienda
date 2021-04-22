import React, { useEffect, useState } from 'react'
import initFirebase from '@firebase/firebase'
import firebase from 'firebase/app'
import 'firebase/auth'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { setUserCookie } from '@firebase/userCookies'
import { mapUserData } from '@firebase//mapUserData'


initFirebase()

const firbaseAuthConfig = {
    signInFlow: 'popup',
    signInOptions: [
        {
            provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
            requireDisplayName: true,
        },
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    signInSuccessUrl: '/',
    credentialHelper: 'none',
    callbacks: {
        signInSuccessWithAuthResult: async ({ user }) => {
            const userData = mapUserData(user)
            setUserCookie(userData)
        },
    },
}

const FirebaseAuth = () => {
    const [renderAuth, setRenderAuth] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setRenderAuth(true)
        }
    }, [])

    return (
        <div>
            {
                renderAuth ? (
                    <StyledFirebaseAuth
                        uiConfig={firbaseAuthConfig}
                        firebaseAuth={firebase.auth()}
                    />
                ) : null
            }
        </div>
    )
}

export default FirebaseAuth;