import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => (
  <>
    <header className="header">
      <nav className="header_navbar">
        <Link href="/" className="header_logo_link">
          <figure className="header_logo">
            <Image
              src="/logo.png"
              alt="Valery Tienda"
              width={110}
              height={85}
            />
          </figure>
        </Link>
        <ul>
          <li>
            <Link href="/location" aria-label="Ubicación de la tienda">
              <i aria-hidden className="fas fa-map-marker-alt" />
            </Link>
          </li>
          <li>
            <Link href="/disclaimer" aria-label="Información de compra">
              <i aria-hidden className="fas fa-info-circle" />
            </Link>
          </li>
          <li>
            <Link href="/login" aria-label="Iniciar sesión">
              <i aria-hidden className="far fa-user-circle" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>

    <style jsx>
      {`
        .header {
          background: var(--color-primary);
          height: 80px;
          position: sticky;
          top: 0;
          z-index: 100;
          box-shadow: 0 2px 20px rgba(171, 62, 216, 0.35);
        }

        .header_navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
          padding: 0 2.4rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .header_logo_link {
          display: flex;
          align-items: center;
          text-decoration: none;
        }

        .header_logo {
          cursor: pointer;
          display: flex;
        }

        .header_navbar ul {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          list-style: none;
          padding: 0;
        }

        .header_navbar ul :global(a) {
          text-decoration: none;
          font-weight: bold;
          color: var(--color-five);
          font-size: 2.2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 4.4rem;
          height: 4.4rem;
          border-radius: 50%;
          transition: background-color 0.2s ease, transform 0.2s ease;
        }

        .header_navbar ul :global(a:hover) {
          background-color: rgba(75, 0, 129, 0.12);
          transform: translateY(-2px);
        }
      `}
    </style>
  </>
);

export default Navbar;
