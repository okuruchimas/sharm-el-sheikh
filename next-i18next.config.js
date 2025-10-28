const path = require('path');

/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    locales: ['en', 'uk', 'ar-EG', 'de', 'it', 'ru', 'et'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  localePath: path.resolve('./public/locales'),
};
