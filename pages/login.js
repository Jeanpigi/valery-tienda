import React, { useState } from 'react';
import { useRouter } from 'next/router';
// Components
import Button from '@components/Button/Button';
// Auth
import { SignInGoogle, SignIn, Register } from '@lib/auth';

const login = () => {

  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSignIn = (e) => {
    e.preventDefault();

    SignIn(email, password)
      .then(() => {
        router.push('/profile');
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleSigInGoogle = (e) => {
    e.preventDefault();

    SignInGoogle()
      .then(() => {
        router.push('/profile');
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    Register(email, password)
      .then(() => {
        router.push('/');
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <>
      <div className="login">
        <h1>Inicio de Sesión</h1>
        <div className="login_container">
          <form>
            <label htmlFor="email">
              <span>E-mail</span>
              <input
                id="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail"
                required
                autoComplete="email"
              />
            </label>

            <label htmlFor="password">
              <span>Contraseña</span>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Contraseña"
                required
                autoComplete="on"
              />
            </label>
          </form>
        </div>
        <div className="button">
          <Button onClick={handleSignIn} type='button'>Iniciar</Button>
        </div>
        <div className="button">
          <Button onClick={handleSigInGoogle} type='button'>Iniciar Sesión con Google</Button>
        </div>
        <div className="button">
          <Button onClick={handleRegister} type='button'>Crear cuenta</Button>
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

      .login_container > form > label > span {
          margin: 5px;
          font-size: 1.5rem;
      }

      .login_container > form > label > input {
          height: 4rem;
          margin-bottom: 1rem;
          background-color: white;
          width: 100%;
      }
      .button {
        margin-top: 1rem;
      }
    `}
      </style>
    </>
  );
};

export default login;
