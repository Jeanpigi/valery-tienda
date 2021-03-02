import React from 'react';
// components
import Map from '@components/Map/Map';

const about = () => (
  <>
  <div className="about">
    <div className="about_card">
        <h1>Bienvenido a Valery</h1>
        <p>Somos una tienda virtual de  compras. Queremos hacer tu vida más sencilla, tú solo preocúpate de encontrar el producto en nuestra tienda.</p>
    </div>
    <Map />
  </div>
  <style jsx>
    {`
      .about {
        display: grid;
        text-align: center;
      }
      .about_card {
        margin-bottom: 1rem;
      }
    `}
  </style>
  </>
);

export default about;
