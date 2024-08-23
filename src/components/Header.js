import React from 'react';

const Header = () => {
  const handleLogin = () => {
    console.log("Login button clicked!");
    // Add your login logic here
  };

  return (
    <header>
      <h1>My Website</h1>
      <button onClick={handleLogin}>Log In</button>
    </header>
  );
};

export default Header;