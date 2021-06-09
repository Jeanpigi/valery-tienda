import React from 'react';

const Welcome = () => {
    return (
        <>
            <div className="welcome">
                <div className="welcome_content">
                    <h1>Bienvenido a Valery Tienda</h1>
                    <p>Somos una tienda virtual de compras. Queremos hacer tu vida más sencilla, tú solo preocúpate de encontrar el producto en nuestra tienda.</p>
                </div>
            </div>
            <style jsx>{`

                .welcome {
                    margin: 2rem;
                }

                .welcome_content {
                    display: flex;
                    gap: 1rem;
                    flex-direction: column;
                }

                .welcome_content h1 {
                    text-align: center;
                    font-size: clamp(1.5rem, 2.5vw, 2rem);
                    color: var(--color-valery);
                }

                .welcome_content p {
                    text-align: center;
                    font-size: 1.8rem;
                }
            `}</style>
        </>
    )
}

export default Welcome;
