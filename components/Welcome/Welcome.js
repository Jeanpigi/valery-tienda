import React from 'react';

const Welcome = () => {
    return (
        <>
            <div className="welcome">
                <div className="welcome_content">
                    <h1 className="welcome_title">Bienvenido a Valery Tienda</h1>
                    <p>Somos una tienda virtual de compras. Queremos hacer tu vida más sencilla, tú solo preocúpate de encontrar el producto en nuestra tienda.</p>
                </div>
            </div>
            <style jsx>{`

                .welcome {
                    margin: 2rem;
                }

                .welcome_content {
                    display: grid;
                    gap: 1rem;
                    place-items: center;
                }

                .welcome_title {
                    
                    text-align: center;
                    font-size: clamp(1.5rem, 2.5vw, 2rem);
                    color: var(--color-primary);
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
