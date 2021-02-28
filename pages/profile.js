import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Button from '@components/Button/Button';
import { SignOut } from '../lib/auth';
// Auth
import { authFirebase } from '../lib/firebase';


const profile = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);

  const onAuthStateChanged = () => {
    authFirebase.onAuthStateChanged((result) => {
      if (result) {
        const { email } = result;
        setUser(email);
      } else {
        router.replace('/login');
      }
    })
  }

  useEffect(() => {
    onAuthStateChanged();
  }, [])

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
      <div className="profile">
        <h1>Bienvenido a tu cuenta de usuario</h1>
        <p>{user}</p>
        <div className="button">
          <Button onClick={handleSignOut}>Cerrar Sesión</Button>
        </div>
      </div>
      <style jsx>
        {`
            .profile {
              display: grid;
              align-items: center;
            }
            .button {
              margin-top: 1rem;
            }
        `}
      </style>
    </>
  );
};

export default profile;
