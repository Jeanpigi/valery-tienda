import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
// Components
import Dashboard from '@components/Dashboard/Dashboard';
import Button from '@components/Button/Button';
// Auth
import { SignOut } from '@lib/auth';
import { authFirebase } from '@lib/firebase';
// Db
import { addProducts } from '@lib/db';


const profile = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);

  const initialStateProducts = {
    name: "",
    description: "",
    price: 0
  }

  const [products, setProducts] = useState(() => initialStateProducts);

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

  const handleInputChange = (e) => {
    const { value } = e.target;
    setProducts({ ...products, value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    addProducts(products);
    setProducts({ ...initialStateProducts });
  }

  return (
    <>
      <div className="profile">
        <div className="profile_container">
          <h1>Bienvenido a tu cuenta de usuario</h1>
          <div className="profile_user">
            <i className="far fa-user" aria-hidden />
            <p> {user}</p>
          </div>
          <div className="button">
            <Button onClick={handleSignOut} type='button'>Cerrar Sesión</Button>
          </div>
          <Dashboard name={products.name} description={products.description} price={products.price} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
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
