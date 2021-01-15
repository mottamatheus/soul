const withImages = require('next-images');

module.exports = withImages({
  esModule: true,
  i18n: {
    locales: ['pt', 'en'],
    defaultLocale: 'pt',
    // localeDetection: false,
  },
  env: {
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
  },
});
