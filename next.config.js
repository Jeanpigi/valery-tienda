
module.exports = {
  env: {
    NEXT_PUBLIC_FIREBASE_APP_KEY: 'AIzaSyAnvAkc3NIwrkvBdUEv47iI40GDWUed720',
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: 'valery-store.firebaseapp.com',
    NEXT_PUBLIC_FIREBASE_PROJECT_ID: 'valery-store',
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: 'valery-store.appspot.com',
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: '114379606182',
    NEXT_PUBLIC_FIREBASE_APP_ID: '1:114379606182:web:3b13f4a7b187973e314c67',
    NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID: 'G-E54KPBLE8E'
  },
  pageExtensions: ['mdx', 'jsx', 'js', 'ts', 'tsx'],
  compress: false,
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
    externalResolver: true,
  }
};
