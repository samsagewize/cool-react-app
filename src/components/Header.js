import React, { useState } from 'react';
import RegisterForm from './RegisterForm';

const Header = () => {
  const [showRegister, setShowRegister] = useState(false);

  const handleLoginClick = () => {
    setShowRegister(!showRegister);
  };

  return (
    <header>
      <h1>My Website</h1>
      <button onClick={handleLoginClick}>
        {showRegister ? 'Hide Register Form' : 'Log In'}
      </button>
      {showRegister && <RegisterForm />}
    </header>
  );
};

export default Header;
