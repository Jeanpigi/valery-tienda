import React from 'react';
// components
import Map from '@components/Map/Map';

const location = () => (
  <>
    <div className="location">
      <div className="location_card">
        <h1>¿Aun No sabes donde está valery Tienda?</h1>
      </div>
      <Map />
    </div>
    <style jsx>
      {`
      .location {
        margin: 2rem;
      }
      .location_card {
        margin-bottom: 1rem;
        display: grid;
        gap: 1rem;
      }

      .location_card h1 {
        text-align: center;
      }
    `}
    </style>
  </>
);

export default location;
