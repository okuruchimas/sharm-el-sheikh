const path = require('path');

module.exports = {
  i18n: {
    locales: ['en', 'uk', 'ar-EG', 'de', 'it'],
    defaultLocale: 'en',
  },
  localePath: path.resolve('./public/locales'),
};
