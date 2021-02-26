import React, { useState } from 'react';
import { useRouter } from 'next/router';
// Components
import Button from '@components/Button/Button';
import { SignInGoogle, SignIn, Register } from '../database/auth';

const login = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // useEffect(() => {
  //     onAuthStateChange()
  // }, [])

  const handleSignIn = (e) => {
    e.preventDefault();

    SignIn(email, password).then((result) => {
      console.log(`has iniciado sesion ${result}`);
      router.push('/user');
    }).catch((error) => {
      alert(error.message);
    });
  };

  const handleSigInGoogle = (e) => {
    e.preventDefault();

    SignInGoogle().then(() => {
      router.push('/user');
    }).catch((err) => {
      alert(err.message);
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    Register(email, password).then(() => {
      router.push('/');
    }).catch((error) => {
      alert(error.message);
    });
  };

  return (
    <div className="login">
      <h1>Inicio de Sesión</h1>
      <div className="">
        <form>
          <label htmlFor="email">
            <span>E-mail</span>
            <input id="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" required autoComplete="email" />
          </label>

          <label htmlFor="password">
            <span>Contraseña</span>
            <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" required autoComplete="on" />
          </label>

          <Button onClick={handleSignIn}>Iniciar</Button>

          <Button onClick={handleRegister}>
            Crear cuenta
          </Button>
        </form>
      </div>
      <div>
        <Button onClick={handleSigInGoogle}>
          Login with Google
        </Button>
      </div>
    </div>
  );
};

export default login;
