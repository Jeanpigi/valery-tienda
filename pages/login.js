import React from 'react';
import FirebaseAuth from '@components/Auth/Auth'

const login = () => {
  return (
    <>
      <div className="login">
        <h1>Inicio de Sesión</h1>
        <div className="login_container">
          <FirebaseAuth />
        </div>
      </div>

      <style jsx>{`

        .login {
            background-color: white;
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 100vh;
            margin-top: 1rem;
        }

        .login_container {
            background-color: var(--background);
            color: var(--color-white);
            width: 30rem;
            display: flex;
            flex-direction: column;
            border-radius: 0.5rem;
            border: 1px solid #672E8C;
            padding: 2rem;
            margin-top: 2rem;
        }
      `}
      </style>
    </>
  );
};

export default login;
