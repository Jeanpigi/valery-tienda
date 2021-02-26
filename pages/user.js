import React from 'react';
import { SignOut } from '../database/auth';
import { useRouter } from 'next/router';
//Auth
import { authFirebase } from '../database/firebase';
//Components
import Button from '@components/Button/Button';

const user = () => {

    const router = useRouter();

    let usuario = authFirebase.currentUser;
    let email = '';

    if (usuario !== null) {
        usuario.providerData.forEach((profile) => {
            email = profile.email;
        });
    }

    const handleSignOut = () => {
        SignOut().then(() => {
            console.log('Se ha cerrado la sesión');
            router.push('/login');
        }).catch(error => {
            console.log(`No se ha podido cerrar la sesión debido a ${error}`);
        })
    }

    return (
        <div className="user">
            <h1>Bienvenido a tu cuenta de usuario</h1>
            <p>{email}</p>
            <Button onClick={handleSignOut}>
                Cerrar Sesión
            </Button>
        </div>
    )
}

export default user;
