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
          border-radius: 50px;
          font-weight: 700;
          padding: 0.9rem 2.4rem;
          font-size: 1.4rem;
          cursor: pointer;
          transition: opacity 0.25s ease, transform 0.25s ease;
          color: var(--color-white);
          font-family: 'Open Sans', sans-serif;
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
        }

        button:hover {
          opacity: 0.85;
          transform: translateY(-1px);
        }
      `}
    </style>
  </>
);

export default Button;
