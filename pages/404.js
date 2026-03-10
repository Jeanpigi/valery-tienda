import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Custom404() {
  return (
    <>
    <Head>
      <title>Página no encontrada — Valery Tienda</title>
    </Head>
    <section className="error-pages">
        <span className="error-code">404</span>
        <h1>Página no encontrada</h1>
        <p>Lo sentimos, la página que buscas no existe.</p>
        <Link href="/" className="error-cta">Volver al inicio</Link>
    </section>
      <style jsx>{`
        .error-pages {
            display: flex;
            flex-direction: column;
            padding: 4rem 2rem;
            justify-content: center;
            align-items: center;
            text-align: center;
            min-height: 60vh;
            gap: 1.6rem;
        }

        .error-code {
            font-size: 8rem;
            font-weight: 800;
            color: var(--color-primary);
            line-height: 1;
        }

        h1 {
            font-size: clamp(2rem, 4vw, 2.8rem);
            font-weight: 700;
            color: var(--color-five);
        }

        p {
            font-size: 1.6rem;
            color: var(--color-terciario);
            font-weight: 300;
        }

        .error-pages :global(.error-cta) {
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

        .error-pages :global(.error-cta:hover) {
            opacity: 0.85;
            transform: translateY(-2px);
        }
      `}
      </style>
    </>
  )
}
