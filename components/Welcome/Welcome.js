import React from 'react';
import Link from 'next/link';

const Welcome = () => {
    return (
        <>
            <div className="welcome">
                <div className="welcome_content">
                    <span className="welcome_badge">Nueva Colección</span>
                    <h1 className="welcome_title">Bienvenido a<br />Valery Tienda</h1>
                    <p className="welcome_subtitle">Descubre nuestra colección de moda. Encuentra tu estilo y haz tu pedido fácil y rápido por WhatsApp.</p>
                    <Link href="/login" className="welcome_cta">
                        Iniciar Sesión
                    </Link>
                </div>
            </div>
            <style jsx>{`
                .welcome {
                    padding: 4rem 2rem 3rem;
                    text-align: center;
                }

                .welcome_content {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1.8rem;
                    max-width: 580px;
                    margin: 0 auto;
                }

                .welcome_badge {
                    display: inline-block;
                    background: linear-gradient(135deg, var(--color-primary), var(--color-secundary));
                    color: white;
                    padding: 0.6rem 1.8rem;
                    border-radius: 50px;
                    font-size: 1.3rem;
                    font-weight: 600;
                    letter-spacing: 0.06em;
                    text-transform: uppercase;
                }

                .welcome_title {
                    font-size: clamp(3rem, 5vw, 4.4rem);
                    font-weight: 800;
                    color: var(--color-five);
                    line-height: 1.2;
                }

                .welcome_subtitle {
                    font-size: clamp(1.4rem, 2.5vw, 1.7rem);
                    font-weight: 300;
                    color: var(--color-terciario);
                    line-height: 1.7;
                    max-width: 440px;
                }

                .welcome_content :global(.welcome_cta) {
                    display: inline-block;
                    background: var(--color-four);
                    color: var(--color-white);
                    text-decoration: none;
                    padding: 1.2rem 3.2rem;
                    border-radius: 50px;
                    font-size: 1.5rem;
                    font-weight: 600;
                    transition: opacity 0.25s ease, transform 0.25s ease;
                }

                .welcome_content :global(.welcome_cta:hover) {
                    opacity: 0.85;
                    transform: translateY(-2px);
                }
            `}</style>
        </>
    )
}

export default Welcome;
