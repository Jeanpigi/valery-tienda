import React from 'react';
import Link from 'next/link';

const Info = () => {
    return (
        <>
            <div className="info">
                <div className="info_content">
                    <h1>Bienvenido a Valery</h1>
                    <p>Somos una tienda virtual de compras. Queremos hacer tu vida más sencilla, tú solo preocúpate de encontrar el producto en nuestra tienda.</p>
                    <div className="info_card">
                        <h2>Disclaimer</h2>
                        <span>Lamentablemente en Valery Store no contamos con pagos con tarjeta de crédito, sin embargo continuamos mejorando el servicio. Actualmente ofrecemos uan forma de compra mediante WhatsApp, Solo tienes que escoger el producto que te interesé y te pondras en contacto con el vendedor por medio del siguiente icono:
                        </span>
                        <div className="info_social">
                            <Link href="https://api.whatsapp.com/send?phone=3185274636">
                                <a target="_blank" rel="noopener">
                                    <i className="fab fa-whatsapp" aria-hidden />
                                </a>
                            </Link>
                        </div>
                    </div>
                    <span>
                        Si deseas mirar más productos y accesorios que ofrecemos, puedes hacerlo mediante nuestros enlaces:
                    </span>
                    <div className="info_network_social">
                        <div className="info_social">
                            <Link href="https://www.instagram.com/valery_tienda1/">
                                <a target="_blank" rel="noopener">
                                    <i aria-hidden className="fab fa-instagram" />
                                </a>
                            </Link>
                        </div>

                        <div className="info_social">
                            <Link href="https://www.facebook.com/ValeryTienda01">
                                <a target="_blank" rel="noopener">
                                    <i aria-hidden className="fab fa-facebook" />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`

                .info {
                    margin: 2rem;
                }

                .info_card {
                    box-shadow: 10px 10px 15px rgba(39, 44, 49, 0.06),
                        -10px 10px 15px rgba(39, 44, 49, 0.03);
                    margin: 0 0 2rem 0;
                    border: none;
                    border-radius: 20px;
                }

                .info_content h1 {
                    text-align: center;
                }

                .info_network_social {
                    display: flex;
                    justify-content: center;
                    gap: 1rem;
                }

                .info_social a {
                    color: var(--color-valery);
                    font-size: 3.6rem;
                }
            `}</style>
        </>
    )
}

export default Info;
