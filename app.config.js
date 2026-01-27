const appJson = require('./app.json');

/**
 * Dynamic Expo config so EAS builds can inject API_URL at build-time via
 * - EXPO_PUBLIC_API_URL (recommended)
 * - or API_URL
 * If neither is present during a production build, a conspicuous placeholder is embedded.
 */
const API_URL = process.env.EXPO_PUBLIC_API_URL || process.env.API_URL || process.env.APP_API_URL || 'https://grvz-app.onrender.com';

console.log('📡 Building with API_URL:', API_URL);

module.exports = {
  ...appJson.expo,
  extra: {
    ...(appJson.expo.extra || {}),
    API_URL,
  },
};
