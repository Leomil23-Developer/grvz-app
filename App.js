import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import Login from './app/screens/login';
import Home from './app/screens/home';
import { API_URL } from './app/config';

// Prevent accidental production builds with a placeholder API_URL
if (process.env.NODE_ENV === 'production' && API_URL && API_URL.includes('api.example.com')) {
  console.error('ERROR: EXPO_PUBLIC_API_URL / API_URL not set for production build. Set EXPO_PUBLIC_API_URL and rebuild.');
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <>
      {isLoggedIn ? (
        <Home user={user} onLogout={handleLogout} />
      ) : (
        <Login onLoginSuccess={handleLoginSuccess} />
      )}
      <StatusBar style="light" />
    </>
  );
}
