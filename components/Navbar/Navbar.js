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
        }

        .header_logo {
          cursor: pointer;
        }

        .header a {
          font-size: 3rem;
          text-decoration: none;
          font-weight: bold;
        }

        .header a:hover {
          color: var( --color-white);
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
