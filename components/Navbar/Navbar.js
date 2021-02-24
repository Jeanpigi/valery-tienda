import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <>
            <nav className="header">
                <menu>
                    <Link href="/">
                        <figure className="header_logo">
                            <img
                                src="https://i.ibb.co/7kqvpT2/logo.png"
                                alt="logo-Valery"
                                border="0"
                            />
                        </figure>
                    </Link>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </menu>
            </nav>

            <style jsx>
                {`
            .header {
                    display: flex;
                    justify-content: space-between;
                    background: linear-gradient(to bottom,#B55BB8   10%, #F7F0EF 90%);
                }

                .header_checkout {
                    display: flex;
                    justify-content: space-evenly;
                    align-items: center;
                    justify-items: center;
                    width: 3rem;
                    margin: 0 0 0 .5rem;
                }

                .header_alert {
                    color: #F7F0EF;
                    font-size: 1.4rem;
                    margin-left: .5rem;
                }

                .header_social {
                    display: flex;
                    justify-content: space-evenly;
                    align-items: center;
                }

                .header ul {
                    list-style: none;
                }

                .header li {
                    display: inline;
                    margin: 2.5rem;
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
