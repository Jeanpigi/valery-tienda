import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

const disclaimer = () => {
    const whatsapp = `https://api.whatsapp.com/send?phone=${process.env.NEXT_PUBLIC_NUMBER_WHATSAPP}`
    return (
        <>
        <Head>
            <title>disclaimer</title>
        </Head>
        <div className="disclaimer">
            <div className="disclaimer_card">
                <h2 className="disclaimer_card_title">Disclaimer</h2>
                <span>Lamentablemente en Valery Store no contamos con pagos con tarjeta de crédito, sin embargo continuamos mejorando el servicio. Actualmente ofrecemos uan forma de compra mediante WhatsApp, Solo tienes que escoger el producto que te interesé y te pondras en contacto con el vendedor por medio del siguiente icono:
                </span>
                <div className="disclaimer_whatsapp">
                        <Link href={whatsapp}>
                        <a target="_blank" rel="noopener">
                            <i className="fab fa-whatsapp" aria-hidden />
                        </a>
                    </Link>
                </div>
            </div>
        </div>
            <style jsx>{`
                .disclaimer {
                    display: grid;
                    justify-content: center;
                    margin-top: 2rem;
                }

                .disclaimer_card {
                    box-shadow: 10px 10px 15px rgba(39, 44, 49, 0.06),
                        -10px 10px 15px rgba(39, 44, 49, 0.03);
                    border: none;
                    border-radius: 20px;
                    width: 600px;
                    height: 400px;
                    padding: 6rem;
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;

                    transition: transform 500ms ease;
                }

                .disclaimer_card:hover {
                    transform: scale(1.05);
                }

                .disclaimer_card_title {
                    font-size: clamp(2.6rem, 2.5vw, 3.6rem);
                    font-weight: bold;
                    text-align: center;
                    color: var(--color-secundary);
                }


                .disclaimer_card span {
                    font-size: clamp(1.4rem, 2.5vw, 2rem);
                    font-weight: 300;
                    text-align: justify;
                }

                .disclaimer_whatsapp {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .disclaimer_whatsapp a {
                    color: var(--color-primary);
                    font-size: clamp(2.5rem, 2.5vw, 3.6rem);
                    text-decoraton: none;

                    transition: transform 0.4s ease-in-out;
                }

                .disclaimer_whatsapp a:hover, .disclaimer_whatsapp a:focus {
                    transform: translateY(-5px);
                    color: var(--color-secundary);
                }
            `}</style>
        </>
    )
}

export default disclaimer;
