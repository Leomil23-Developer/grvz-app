const appJson = require('./app.json');

/**
 * Dynamic Expo config so EAS builds can inject API_URL at build-time via
 * - EXPO_PUBLIC_API_URL (recommended)
 * - or API_URL
 * If neither is present during a production build, a conspicuous placeholder is embedded.
 */
const API_URL = process.env.EXPO_PUBLIC_API_URL || process.env.API_URL || process.env.APP_API_URL || (process.env.NODE_ENV === 'production' ? 'https://api.example.com' : 'http://localhost:4000');

if (process.env.NODE_ENV === 'production' && !process.env.EXPO_PUBLIC_API_URL && !process.env.API_URL) {
  console.warn('EXPO_PUBLIC_API_URL / API_URL not set — production build will contain a placeholder. Use EAS secrets or set the env var before building.');
}

module.exports = {
  ...appJson.expo,
  extra: {
    ...(appJson.expo.extra || {}),
    API_URL,
  },
};
