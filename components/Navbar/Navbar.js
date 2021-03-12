import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => (
  <>
    <header className="header">
      <Link href="/">
        <figure className="header_logo">
          <Image
            src="/logo.png"
            alt="logo-Valery"
            width={150}
            height={100}
          />
        </figure>
      </Link>
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

        .header_logo {
          cursor: pointer;
        }

        .header_logo, .header_about, .header_social {
          align-self: center;
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

        @media screen and (min-width: 768px) {
          .header {
            flex-direction: inherit;
            justify-content: space-between;
          }
        }
      `}
    </style>
  </>
);

export default Navbar;
