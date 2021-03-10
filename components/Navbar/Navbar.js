import React from 'react';
import Link from 'next/link';

const Navbar = () => (
  <>
    <header className="header">
      <figure className="header_logo">
        <Link href="/">
          <img
            src="https://i.ibb.co/7kqvpT2/logo.png"
            alt="logo-Valery"
            border="0"
          />
        </Link>
      </figure>
      <div className="header_about">
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
      <div className="header_social">
        <div>
          <Link href="https://www.instagram.com/valery_tienda1/">
            <a target="_blank">
              <i aria-hidden className="fab fa-instagram" />
            </a>
          </Link>
        </div>

        <div>
          <Link href="https://www.facebook.com/ValeryTienda01">
            <a target="_blank">
              <i aria-hidden className="fab fa-facebook" />
            </a>
          </Link>
        </div>
      </div>
    </header>

    <style jsx>
      {`
        .header {
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: var(--background-header);
          height: 334px;
          width: 100%;
          min-width: 320px;
        }

        .header_logo, .header_about, .header_social {
          align-self: center;
        }

        .header_logo img {
          width: 15rem;
          cursor: pointer;
        }

        .header a {
          font-size: 3rem;
          text-decoration: none;
          font-weight: bold;
        }

        .header_social {
          margin-top: 1rem;
        }

        .header_social div {
          display: inline;
          margin: 1.5rem;
        }

        .header_social i {
          width: 2rem;
        }
      `}
    </style>
  </>
);

export default Navbar;
