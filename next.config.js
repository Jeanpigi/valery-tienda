
module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  pageExtensions: ['mdx', 'jsx', 'js', 'ts', 'tsx'],
  compress: true,
  turbopack: {
    resolveAlias: {
      'react-dom/client': 'react-dom',
    },
  },
  webpack(config) {
    // Alias para builds de producción (next build usa webpack, no turbopack)
    config.resolve.alias['react-dom/client'] = 'react-dom';
    return config;
  },
  async headers() {
    return [
      {
        source: '/api/products',
        headers: [
          {
            key: 'x-custom-header',
            value: 'my custom header value',
          },
          {
            key: 'x-another-custom-header',
            value: 'my other custom header value',
          },
        ],
      },
    ]
  },
};
