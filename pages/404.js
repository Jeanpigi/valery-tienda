import React from 'react';
import Head from 'next/head';

// pages/404.js
export default function Custom404() {
  return (
    <>
    <Head>
      <title>Error pages</title>
    </Head>
    <section className="error-pages">
        <h1>404 - No se encuentra esta página</h1>
    </section>
      <style jsx>{`

        .error-pages {
            display: flex;
            flex-direction: column;
            padding: 1rem;
            justify-content: center;
            align-items: center;
            height: 56vh;
        }
      `}
      </style>
    </>
  )
}
