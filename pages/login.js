import React from 'react';
import Head from 'next/head';
import FirebaseAuth from '@components/Auth/Auth'

const login = () => {
  return (
    <>
    <Head>
      <title>Inicio de Sesión</title>
    </Head>
      <div className="login">
        <h1>Inicio de Sesión</h1>
        <div className="login_container">
          <FirebaseAuth />
        </div>
      </div>

      <style jsx>{`

        .login {
            display: flex;
            flex-direction: column;
            padding: 1rem;
            justify-content: center;
            align-items: center;
            height: 56vh;
        }

        .login_container {
            display: flex;
            align-items: center;
            gap: 1rem;
        }
      `}
      </style>
    </>
  );
};

export default login;
