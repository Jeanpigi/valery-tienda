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
          background: var(--color-primary);
          gap: 1rem;
        }

        .header_logo {
          cursor: pointer;
        }

        .header_location, .header_disclaimer {
          padding: 1rem;
          cursor: pointer;
          font-size: clamp(2rem, 2.5vw, 2.5rem);
        }

        .header a {
          text-decoration: none;
          font-weight: bold;
          color: var(--color-five);
        }

        .header a:hover {
          color: var(--color-terciario);
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
