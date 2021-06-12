import React from 'react';

const Button = ({ children, onClick, type }) => (
  <>
    <button onClick={onClick} type={type}>
      {children}
    </button>
    <style jsx>
      {`
        button {
          border: 0;
          background: var(--color-four);
          border-radius: 9999px;
          font-weight: 800;
          padding: 8px 24px;
          font-size: 1.4rem;
          cursor: pointer;
          transition: opacity 0.3s ease;
          color:  var(--color-white);
        }

        button:hover {
          opacity: 0.7;
        }
      `}
    </style>
  </>
);

export default Button;
