import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import Login from './app/screens/login';
import Home from './app/screens/home';

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
