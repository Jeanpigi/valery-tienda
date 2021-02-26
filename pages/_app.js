// import App from 'next/app'
import React from 'react';
import Layout from '@components/Layout/Layout';
import '../public/style.css';

// Performance
// export function reportWebVitals(metric) {
//     console.log(metric)
// }

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
