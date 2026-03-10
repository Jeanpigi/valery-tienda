import React from 'react';
import Head from 'next/head';
import FirebaseAuth from '@components/Auth/Auth'

const Login = () => {
  return (
    <>
    <Head>
      <title>Inicio de Sesión — Valery Tienda</title>
    </Head>
      <div className="login">
        <div className="login_header">
          <h1>Inicio de Sesión</h1>
          <p>Accede a tu cuenta para gestionar productos</p>
        </div>
        <div className="login_container">
          <FirebaseAuth />
        </div>
      </div>

      <style jsx>{`
        .login {
            display: flex;
            flex-direction: column;
            padding: 4rem 2rem;
            align-items: center;
            min-height: 60vh;
        }

        .login_header {
            text-align: center;
            margin-bottom: 2.4rem;
        }

        .login_header h1 {
            font-size: clamp(2.4rem, 4vw, 3.2rem);
            font-weight: 800;
            color: var(--color-five);
            margin-bottom: 0.8rem;
        }

        .login_header p {
            font-size: 1.5rem;
            color: var(--color-terciario);
            font-weight: 300;
        }

        .login_container {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            max-width: 420px;
            background: white;
            border-radius: 16px;
            box-shadow: 0 4px 24px rgba(100, 0, 153, 0.10);
            border: 1px solid rgba(171, 62, 216, 0.15);
            overflow: hidden;
        }
      `}
      </style>
    </>
  );
};

export default Login;
