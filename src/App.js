import React, { useState } from 'react';
import Header from './components/Header';
import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Here you would normally do authentication logic
    console.log("Login button clicked!");
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      <Header isLoggedIn={isLoggedIn} onLogin={handleLogin} />
      {/* The rest of your application */}
    </div>
  );
};

export default App;
