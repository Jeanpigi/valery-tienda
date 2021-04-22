import React from 'react';
import Link from 'next/link';

const Info = () => {
    return (
        <>
            <div className="info">
                <div className="info_content">
                    <h1>Bienvenido a Valery</h1>
                    <p>Somos una tienda virtual de compras. Queremos hacer tu vida más sencilla, tú solo preocúpate de encontrar el producto en nuestra tienda.</p>
                    <h2>Disclaimer</h2>
                    <span>lamentablemente en Valery Store no contamos con pagos con tarjeta de credito, sin embargo continuamos mejorando el servicio. Actualmente ofrecemos uan forma de compra mediante WhatsApp, Solo tienes que escoger el producto que te interesé y te pondras en contacto con el vendedor</span>
                    <div className="info_whatsapp">
                        <Link href="https://api.whatsapp.com/send?phone=3185274636">
                            <a target="_blank" rel="noopener">
                                <i className="fab fa-whatsapp" aria-hidden />
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <style jsx>{`

                .info {
                    margin: 2rem;
                }

                .info_content h1 {
                    text-align: center;
                }

                .info_whatsapp a {
                    color: var(--color-valery);
                    font-size: 3.6rem;
                }
            `}</style>
        </>
    )
}

export default Info;
