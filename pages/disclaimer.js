import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

const disclaimer = () => {
    return (
        <>
        <Head>
            <title>disclaimer</title>
        </Head>
        <div className="disclaimer">
            <div className="disclaimer_card">
                <h2>Disclaimer</h2>
                <span>Lamentablemente en Valery Store no contamos con pagos con tarjeta de crédito, sin embargo continuamos mejorando el servicio. Actualmente ofrecemos uan forma de compra mediante WhatsApp, Solo tienes que escoger el producto que te interesé y te pondras en contacto con el vendedor por medio del siguiente icono:
                        </span>
                <div className="disclaimer_whatsapp">
                    <Link href="https://api.whatsapp.com/send?phone=3185274636">
                        <a target="_blank" rel="noopener">
                            <i className="fab fa-whatsapp" aria-hidden />
                        </a>
                    </Link>
                </div>
            </div>
        </div>
            <style jsx>{`
                .disclaimer {
                    padding: 3rem;
                }

                .disclaimer_card {
                    box-shadow: 10px 10px 15px rgba(39, 44, 49, 0.06),
                        -10px 10px 15px rgba(39, 44, 49, 0.03);
                    border: none;
                    border-radius: 20px;
                    padding: 1rem;
                }
                .disclaimer_whatsapp a {
                    color: var(--color-valery);
                    font-size: 3.6rem;
                }
            `}</style>
        </>
    )
}

export default disclaimer;
