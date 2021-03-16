
module.exports = {
  env: {
      FIREBASE_API_KEY: 'AIzaSyAnvAkc3NIwrkvBdUEv47iI40GDWUed720',
  },
  pageExtensions: ['mdx', 'jsx', 'js', 'ts', 'tsx'],
  compress: false,
  // images: {
  //   loader: 'imgix',
  //   path: 'https://fakestoreapi.com/products',
  // },
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
    externalResolver: true,
  }
};
