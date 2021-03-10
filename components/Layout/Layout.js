import React from 'react';
import Head from 'next/head';
import Navbar from '@components/Navbar/Navbar';
import Footer from '@components/Footer/Footer';

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Valery tienda</title>
    </Head>
    <Navbar />
    <div className="main">{children}</div>
    <Footer />
  </>
);

export default Layout;
