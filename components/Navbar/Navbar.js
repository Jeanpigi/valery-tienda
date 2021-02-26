import React from 'react';
import Link from 'next/link';


const Navbar = () => {
    return (
        <>
            <header className="header">
                <figure className="header_logo">
                    <Link href="/">
                        <img
                            src="https://i.ibb.co/7kqvpT2/logo.png"
                            alt="logo-Valery"
                            border="0"
                        />
                    </Link>
                </figure>
                <div className="header_about">
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </div>
                <div className="header_social">
                    <div>
                        <Link href="https://www.instagram.com/valery_tienda1/" >
                            <a target="_blank">
                                <i aria-hidden className="fab fa-instagram" />
                            </a>
                        </Link>
                    </div>

                    <div>
                        <Link href="https://www.facebook.com/paola.escalantesalas" >
                            <a target="_blank">
                                <i aria-hidden className="fab fa-facebook" />
                            </a>
                        </Link>
                    </div>
                </div>
            </header>

            <style jsx>
                {`
            .header {
                    display: flex;
                    justify-content: space-between;
                    background: linear-gradient(to bottom,#B55BB8   10%, #F7F0EF 90%);
                    border-bottom: 1px solid #f2f2f2;
                }

                .header_logo img {
                    width: 15rem;
                    cursor: pointer;
                }

                .header a {
                    font-size: 3rem;
                    font-weight: 300;
                    text-decoration: none;
                }

                .header_about {
                    display: flex;
                    justify-content: space-evenly;
                    align-items: center;
                    justify-items: center;
                    width: 3rem;
                    margin: 0 0 0 .5rem;
                }

                .header_social {
                    display: flex;
                    justify-content: space-evenly;
                    align-items: center;
                }

                .header_social div {
                    display: inline;
                    margin: 2.5rem;
                }


                .header_social i {
                    color: linear-gradient(to bottom,#B55BB8   10%, #F7F0EF 90%);;
                    width: 2rem;
                }
            `}
            </style>
        </>
    )
}

export default Navbar;
