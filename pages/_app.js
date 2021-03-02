// import App from 'next/app'
import React from 'react';
import Layout from '@components/Layout/Layout';
import '../public/style.css';

// Performance
export function reportWebVitals(metric) {
  switch(metric.name) {
    case 'FPC':
      console.log(JSON.stringify(metric));
      break;
    case 'LCP':
      console.log(JSON.stringify(metric));
      break;
    case 'CLS':
      console.log(JSON.stringify(metric));
      break;
    case 'FID':
      console.log(JSON.stringify(metric));
      break;
    case 'TTFB':
      console.log(JSON.stringify(metric));
      break;
    case 'Next.js-hydration':
      console.log(JSON.stringify(metric));
      break;
    case 'Next.js-route-change-to-render':
      console.log(JSON.stringify(metric));
      break;
    case 'Next.js-render':
      console.log(JSON.stringify(metric));
      break;
  }
}

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
