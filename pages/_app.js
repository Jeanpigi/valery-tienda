// import App from 'next/app'
import React from 'react';
import Layout from '@components/Layout/Layout';
import '../public/style.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;