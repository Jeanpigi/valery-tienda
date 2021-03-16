import React from 'react';
import { useRouter } from 'next/router';
// Components
import Dashboard from '@components/Dashboard/Dashboard';
import Button from '@components/Button/Button';
// Auth
import { SignOut } from '@lib/auth';
// user
import useUser from '@hooks/useUser';


const profile = () => {
  const user = useUser();
  const router = useRouter();

  const handleSignOut = () => {
    SignOut()
      .then(() => {
        router.push('/login');
      })
      .catch((error) => {
        console.log(`No se ha podido cerrar la sesión debido a ${error}`);
      });
  };

  return (
    <>
      <div className="profile">
        <div className="profile_container">
          <h1>Bienvenido a tu cuenta de usuario</h1>
          <div className="profile_user">
            <i className="far fa-user" aria-hidden />
            <p>{user}</p>
          </div>
          <div className="button">
            <Button onClick={handleSignOut} type='button'>Cerrar Sesión</Button>
          </div>
        </div>
        <Dashboard />
      </div>
      <style jsx>
        {`
            .profile_container {
              display: flex;
              flex-direction: column;
              margin: 1rem;
              align-items: center;
            }
            .profile_user {
              display: flex;
              justify-content: space-between;
              align-items: center;
              gap: 1rem;
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
