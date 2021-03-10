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
        margin: 2rem;
      }
      .about_card {
        margin-bottom: 1rem;
        display: grid;
        gap: 1rem;
      }

      .about_card h1 {
        text-align: center;
      }

      .about_card p {
        text-align: justify;
      }
    `}
    </style>
  </>
);

export default about;
