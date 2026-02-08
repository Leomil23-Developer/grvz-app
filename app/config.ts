// Optional dependency in non-Expo builds — silence TS if types/module are missing
// @ts-ignore: optional dependency
import Constants from 'expo-constants';

/**
 * Centralized API URL resolver.
 * - reads from Expo `extra` when available (app.config.js / eas.json)
 * - falls back to a sensible dev LAN URL in __DEV__
 * - production should set `extra.API_URL` to the real HTTPS endpoint
 */
const extra = (Constants as any)?.expoConfig?.extra ?? (Constants as any)?.manifest?.extra ?? {};

// 🔧 DEV OVERRIDE: Temporarily force production URL for testing
//const DEV_OVERRIDE = 'http://192.168.1.10:4000'; // Set to null to disable
const DEV_OVERRIDE = 'https://grvz-app.onrender.com'; // Set to null to disable

export const API_URL: string =
  DEV_OVERRIDE ||
  (extra && extra.API_URL) ||
  (global as any)?.API_URL ||
  'https://grvz-app.onrender.com';

console.log('🔗 API_URL resolved to:', API_URL);

export const api = (path: string) => `${API_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;

export default { API_URL, api };
