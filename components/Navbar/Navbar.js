import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => (
  <>
    <header className="header">
      <nav className="header_navbar">
        <Link href="/">
          <figure className="header_logo">
            <Image
              src="/logo.png"
              alt="logo-Valery"
              width={130}
              height={100}
            />
          </figure>
        </Link>
        <ul>
          <Link href="/location">
            <a>
              <i aria-hidden className="fas fa-search-location" />
            </a>
          </Link>

          <Link href='/disclaimer'>
            <a>
              <i aria-hidden className="fas fa-info-circle" />
            </a>
          </Link>
        </ul>
      </nav>
    </header>

    <style jsx>
      {`
        .header {
          background: var(--color-primary);
          height: 130px;
        }

        .header_navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 10px 0 0 80px;

          animation: 2s navbar 0.5s ease-in-out;
        }

        @keyframes navbar {
            0% {
                transform: translateY(-200px);
            }

            100% {
                transform: translateY(0px);
            }
        }

        .header_logo {
          cursor: pointer;
        }

        .header_navbar ul {
          display: flex;
          justify-content: space-evenly;
          list-style: none;
          padding: 0;
          width: 450px;
          cursor: pointer;
          font-size: clamp(2rem, 2.5vw, 2.5rem);
        }

        .header_navbar a {
          text-decoration: none;
          font-weight: bold;
          color: var(--color-five);
        }

        .header_navbar a:hover {
          color: var(--color-terciario);
          transition: .8s;
        }
      `}
    </style>
  </>
);

export default Navbar;
