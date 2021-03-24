
module.exports = {
  pageExtensions: ['mdx', 'jsx', 'js', 'ts', 'tsx'],
  compress: false,
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
    externalResolver: true,
  }
};
