import React from 'react';
import styles from './footer.module.css';

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footer_copyright}>
                <span>
                    © 2021 Valery Tienda | Todos los derechos reservados. Teléfono (57)
                    3214537245. Dirección: Calle 13 #11-50, Florencia Caquetá Colombia.
                </span>
            </div>
        </div>
    )
}

export default Footer;
