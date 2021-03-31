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
          <a>
            <i className="fas fa-search-location" />
          </a>
        </Link>
      </div>
      <div className="header_info">
        <Link href='/info'>
          <a>
            <i className="fas fa-info" />
          </a>
        </Link>
      </div>
      <div className='header_login'>
        <Link href='/login'>
          <a>
            <i className="fas fa-user" />
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
          height: 334px;
          width: 100%;
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
