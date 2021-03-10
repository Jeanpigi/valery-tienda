import React from 'react';
import Link  from 'next/link';
import styles from './footer.module.css';


function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_container}>
        <div className={styles.footer_container_column}>
          <Link href="/about">
            <a>Conoce más sobre Nosotros</a>
          </Link>
        </div>

        <div className={styles.footer_copyright}>
          <p>© 2021 Valery Tienda | Todos los derechos reservados.</p>
          <p>
            Teléfono (57) 3214537245. Dirección: Calle 13 #11-50, Florencia
            Caquetá Colombia.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
