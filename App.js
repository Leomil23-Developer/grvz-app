import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Login from './app/screens/login';
import Home from './app/screens/home';
import Profile from './app/screens/profile';
import { API_URL } from './app/config';

// Prevent accidental production builds with a placeholder API_URL
if (process.env.NODE_ENV === 'production' && API_URL && API_URL.includes('api.example.com')) {
  console.error('ERROR: EXPO_PUBLIC_API_URL / API_URL not set for production build. Set EXPO_PUBLIC_API_URL and rebuild.');
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [showProfile, setShowProfile] = useState(false);

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
    setShowProfile(false);
  };

  const openProfile = () => setShowProfile(true);
  const closeProfile = () => setShowProfile(false);

  return (
    <SafeAreaProvider>
      {!isLoggedIn ? (
        <Login onLoginSuccess={handleLoginSuccess} />
      ) : showProfile ? (
        <Profile user={user} onClose={closeProfile} onLogout={handleLogout} />
      ) : (
        <Home user={user} onLogout={handleLogout} onOpenProfile={openProfile} />
      )} 
      <StatusBar style="light" />
    </SafeAreaProvider>
  );
}
