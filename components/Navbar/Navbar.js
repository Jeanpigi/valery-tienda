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
      <div className="header_location">
        <Link href="/location">
          <a>
            <i aria-hidden className="fas fa-search-location" />
          </a>
        </Link>
      </div>
      <div className='header_disclaimer'>
        <Link href='/disclaimer'>
          <a>
            <i aria-hidden className="fas fa-info-circle" />
          </a>
        </Link>
      </div>
    </header>

    <style jsx>
      {`
        .header {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: var(--background-header);
          min-width: 320px;
          gap: 1rem;
        }

        .header_logo {
          cursor: pointer;
        }

        .header_location, .header_disclaimer {
          border: 1px solid var(--color-valery);
          border-radius: 50%;
          padding: 1rem;
          cursor: pointer;
          background: var(--color-white);
          font-size: clamp(2rem, 2.5vw, 2.5rem);
          box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
        }

        .header a {
          text-decoration: none;
          font-weight: bold;
          color: black;
        }

        .header a:hover {
          color: var(--color-secundary);
          transition: .8s;
        }


        @media screen and (min-width: 768px) {
          .header {
            flex-direction: inherit;
            justify-content: space-around;
          }
        }
      `}
    </style>
  </>
);

export default Navbar;
