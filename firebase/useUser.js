import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getAuth, onIdTokenChanged, signOut } from 'firebase/auth';
import app from './firebase';
import { removeUserCookie, setUserCookie, getUserfromCookie } from './userCookies';
import { mapUserData } from './mapUserData';

const useUser = () => {
    const [user, setUser] = useState();
    const router = useRouter();

    const logout = async () => {
        const auth = getAuth(app);
        return signOut(auth)
            .then(() => {
                router.push('/');
            })
            .catch((e) => {
                console.error(e);
            });
    };

    useEffect(() => {
        const auth = getAuth(app);

        const cancelAuthListener = onIdTokenChanged(auth, async (firebaseUser) => {
            if (firebaseUser) {
                const userData = await mapUserData(firebaseUser);
                setUserCookie(userData);
                setUser(userData);
            } else {
                removeUserCookie();
                setUser();
            }
        });

        const userFromCookie = getUserfromCookie();
        if (!userFromCookie) {
            router.push('/');
            return;
        }
        setUser(userFromCookie);

        return () => {
            cancelAuthListener();
        };
    }, []);

    return { user, logout };
};

export { useUser };
