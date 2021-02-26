import React from 'react';
import Navbar from '@components/Navbar/Navbar';
import Footer from '@components/Footer/Footer';

const Layout = ({ children }) => (
  <div>
    <Navbar />
    <div className="main">{children}</div>
    <Footer />
  </div>
);

export default Layout;
