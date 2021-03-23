import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className='footer_container'>
          <div className='footer_about'>
            <Link href="/about">
              <a>Conoce más sobre Nosotros</a>
            </Link>
          </div>

          <div className='footer_social'>
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

          <div className='footer_copyright'>
            <p>© 2021 Valery Tienda | Todos los derechos reservados.</p>
            <p>
              Teléfono (57) 3214537245. Dirección: Calle 13 #11-50, Florencia
              Caquetá Colombia.
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .footer {
          background: var(--background-footer);
          padding: 4em 0em;
          margin-top: 3em;
        }

        .footer_container {
          display: grid;
          grid-template-rows: 1fr;
          justify-content: center;
          align-items: center;
          justify-items: center;
        }

        .footer_container a, p {
          color: var(--color-white);
        }

        .footer_social a {
          font-size: 3rem;
          font-weight: bold;
        }

        .footer_social div {
          display: inline;
          margin: 1.5rem;
        }

        .footer_social i {
          width: 2rem;
        }

        .footer_about a {
          font-size: 1.7rem;
          font-weight: 300;
          text-decoration: none;
        }

        .footer_copyright {
          text-align: center;
          font-size: 0.8rem;
        }

        .footer_copyright p {
          margin: 1.2rem 2rem;
        }
    `}</style>
    </>
  );
}

export default Footer;
