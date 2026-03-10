import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <footer className='footer'>
        <div className='footer_container'>
          <div className='footer_brand'>
            <h3>Valery Tienda</h3>
            <p>Tu tienda de moda favorita en Florencia, Caquetá.</p>
          </div>

          <div className='footer_social'>
            <h4>Síguenos</h4>
            <div className="footer_social_links">
              <Link
                href="https://www.instagram.com/valery_tienda1/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Valery Tienda"
              >
                <i aria-hidden className="fab fa-instagram" />
              </Link>
              <Link
                href="https://www.facebook.com/ValeryTienda01"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook de Valery Tienda"
              >
                <i aria-hidden className="fab fa-facebook" />
              </Link>
            </div>
          </div>

          <div className='footer_info'>
            <h4>Contacto</h4>
            <p>Tel: (57) 321 453 7245</p>
            <p>Calle 13 #11-50</p>
            <p>Florencia, Caquetá, Colombia</p>
          </div>
        </div>

        <div className='footer_bottom'>
          <p>© {new Date().getFullYear()} Valery Tienda — Todos los derechos reservados.</p>
        </div>
      </footer>
      <style jsx>{`
        .footer {
          background: var(--color-primary);
          margin-top: 5rem;
        }

        .footer_container {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          max-width: 1000px;
          margin: 0 auto;
          padding: 4rem 2rem 3rem;
          text-align: center;
        }

        @media screen and (min-width: 700px) {
          .footer_container {
            grid-template-columns: repeat(3, 1fr);
            text-align: left;
          }

          .footer_social_links {
            justify-content: flex-start;
          }
        }

        .footer_brand h3 {
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--color-five);
          margin-bottom: 0.8rem;
        }

        .footer_brand p {
          font-size: 1.4rem;
          color: var(--color-five);
          font-weight: 300;
          line-height: 1.6;
        }

        .footer_social h4,
        .footer_info h4 {
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--color-five);
          margin-bottom: 1.2rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .footer_social_links {
          display: flex;
          gap: 1.2rem;
          justify-content: center;
        }

        .footer_social_links :global(a) {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 4rem;
          height: 4rem;
          border-radius: 50%;
          background: rgba(75, 0, 129, 0.12);
          color: var(--color-five);
          font-size: 2rem;
          text-decoration: none;
          transition: background 0.2s ease, transform 0.2s ease;
        }

        .footer_social_links :global(a:hover) {
          background: rgba(75, 0, 129, 0.25);
          transform: translateY(-3px);
        }

        .footer_info p {
          font-size: 1.4rem;
          color: var(--color-five);
          font-weight: 300;
          line-height: 1.8;
        }

        .footer_bottom {
          border-top: 1px solid rgba(75, 0, 129, 0.2);
          padding: 1.6rem 2rem;
          text-align: center;
        }

        .footer_bottom p {
          font-size: 1.3rem;
          color: var(--color-five);
          font-weight: 300;
        }
    `}</style>
    </>
  );
}

export default Footer;
