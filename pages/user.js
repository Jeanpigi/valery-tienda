import React from 'react';
import { useRouter } from 'next/router';
import Button from '@components/Button/Button';
import { SignOut } from '../lib/auth';
// Auth
import { authFirebase } from '../lib/firebase';
// Components

const user = () => {
  const router = useRouter();

  const usuario = authFirebase.currentUser;
  let email = '';

  if (usuario !== null) {
    usuario.providerData.forEach((profile) => {
      email = profile.email;
    });
  }

  const handleSignOut = () => {
    SignOut()
      .then(() => {
        console.log('Se ha cerrado la sesión');
        router.push('/login');
      })
      .catch((error) => {
        console.log(`No se ha podido cerrar la sesión debido a ${error}`);
      });
  };

  return (
    <>
      <div className="user">
        <h1>Bienvenido a tu cuenta de usuario</h1>
        <p>{email}</p>
        <Button onClick={handleSignOut}>Cerrar Sesión</Button>
      </div>
      <style jsx>
        {`
            .user {
              display: grid;
              align-items: center;
            }
        `}
      </style>
    </>
  );
};

export default user;
