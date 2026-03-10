import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

const disclaimer = () => {
    const whatsapp = `https://api.whatsapp.com/send?phone=${process.env.NEXT_PUBLIC_NUMBER_WHATSAPP}`
    return (
        <>
        <Head>
            <title>¿Cómo comprar? — Valery Tienda</title>
        </Head>
        <div className="disclaimer">
            <div className="disclaimer_card">
                <h2 className="disclaimer_card_title">¿Cómo comprar?</h2>
                <span>Lamentablemente en Valery Store no contamos con pagos con tarjeta de crédito, sin embargo continuamos mejorando el servicio. Actualmente ofrecemos una forma de compra mediante WhatsApp. Solo tienes que escoger el producto que te interesa y ponerte en contacto con el vendedor por medio del siguiente icono:
                </span>
                <div className="disclaimer_whatsapp">
                    <Link href={whatsapp} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-whatsapp" aria-hidden />
                    </Link>
                </div>
            </div>
        </div>
            <style jsx>{`
                .disclaimer {
                    display: flex;
                    justify-content: center;
                    align-items: flex-start;
                    padding: 3rem 2rem;
                    min-height: 60vh;
                }

                .disclaimer_card {
                    box-shadow: 0 4px 24px rgba(100, 0, 153, 0.10);
                    background: white;
                    border: 1px solid rgba(171, 62, 216, 0.15);
                    border-radius: 20px;
                    width: 100%;
                    max-width: 560px;
                    padding: 4rem;
                    display: flex;
                    flex-direction: column;
                    gap: 2.4rem;
                    transition: transform 500ms ease, box-shadow 500ms ease;
                }

                .disclaimer_card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 12px 40px rgba(100, 0, 153, 0.16);
                }

                .disclaimer_card_title {
                    font-size: clamp(2.4rem, 2.5vw, 3.2rem);
                    font-weight: 800;
                    text-align: center;
                    color: var(--color-secundary);
                }

                .disclaimer_card span {
                    font-size: clamp(1.4rem, 2.5vw, 1.7rem);
                    font-weight: 300;
                    text-align: justify;
                    line-height: 1.7;
                    color: var(--color-five);
                }

                .disclaimer_whatsapp {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .disclaimer_whatsapp :global(a) {
                    color: var(--color-primary);
                    font-size: clamp(3rem, 5vw, 4.4rem);
                    text-decoration: none;
                    transition: transform 0.3s ease, color 0.3s ease;
                }

                .disclaimer_whatsapp :global(a:hover),
                .disclaimer_whatsapp :global(a:focus) {
                    transform: translateY(-5px);
                    color: var(--color-secundary);
                }
            `}</style>
        </>
    )
}

export default disclaimer;
