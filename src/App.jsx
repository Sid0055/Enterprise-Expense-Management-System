import React, { useState } from 'react';
import { MainLayout } from './components/MainLayout';
import { LoginScreen } from './components/LoginScreen';
import { ExpenseProvider } from './components/ExpenseContext';
import './App.css';
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Basic validation
    if (email && password) {
      setIsLoggedIn(true);
    }
  };

  return (
    <ExpenseProvider>
      {!isLoggedIn ? (
        <LoginScreen
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
          handleLogin={handleLogin}
        />
      ) : (
        <MainLayout setIsLoggedIn={setIsLoggedIn} />
      )}
    </ExpenseProvider>
  );
};

export default App;