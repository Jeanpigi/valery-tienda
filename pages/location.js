import React from 'react';
// components
import Map from '@components/Map/Map';

const location = () => (
  <>
    <div className="location">
      <h1>¿Aun No sabes donde está valery Tienda?</h1>
      <div className="location_card">
        <Map />
      </div>
    </div>
    <style jsx>
      {`
      .location {
        margin: 2rem;
        display: grid;
        justify-content: center;
        gap: 2rem;
      }

      .location h1 {
        font-size: clamp(1.5rem, 2.5vw, 2rem);
        color: var(--color-primary);
        text-align: center;
      }

      .location_card {
        width: 310px;
        box-shadow: 10px 10px 15px rgba(39, 44, 49, 0.06), -10px 10px 15px rgba(39, 44, 49, 0.03);
        border: 1px solid var(--color-primary);
      }

      @media screen and (min-width: 768px) {
          .location_card {
            width: 700px;
          }
        }
      
    `}
    </style>
  </>
);

export default location;
