import React, { useEffect, useState } from 'react';
import {
    getAuth,
    EmailAuthProvider,
    GoogleAuthProvider,
} from 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { setUserCookie } from '@firebase/userCookies';
import { mapUserData } from '@firebase/mapUserData';
import app from '@firebase/firebase';

const auth = getAuth(app);

const firebaseAuthConfig = {
    signInFlow: 'popup',
    signInOptions: [
        {
            provider: EmailAuthProvider.PROVIDER_ID,
            requireDisplayName: true,
        },
        GoogleAuthProvider.PROVIDER_ID,
    ],
    signInSuccessUrl: '/',
    credentialHelper: 'none',
    callbacks: {
        signInSuccessWithAuthResult: async ({ user }) => {
            const userData = await mapUserData(user);
            setUserCookie(userData);
        },
    },
};

const FirebaseAuth = () => {
    const [renderAuth, setRenderAuth] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setRenderAuth(true);
        }
    }, []);

    return (
        <div>
            {renderAuth ? (
                <StyledFirebaseAuth
                    uiConfig={firebaseAuthConfig}
                    firebaseAuth={auth}
                />
            ) : null}
        </div>
    );
};

export default FirebaseAuth;
