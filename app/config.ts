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

export const API_URL: string =
  (extra && extra.API_URL) ||
  // allow test-time injection via global for quick local overrides
  (global as any)?.API_URL ||
  (typeof process !== 'undefined' && (process as any).env?.EXPO_PUBLIC_API_URL) ||
  (__DEV__ ? 'http://localhost:4000' : 'https://api.example.com');

if (!__DEV__ && API_URL.startsWith('http://')) {
  console.warn('WARNING: API_URL is using insecure HTTP in a non-dev build — ensure EXPO_PUBLIC_API_URL is set to an https:// endpoint for production builds.');
}

export const api = (path: string) => `${API_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;

export default { API_URL, api };
