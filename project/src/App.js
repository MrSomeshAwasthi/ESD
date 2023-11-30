import './App.css';
import Login from './components/Login';
import React, { useState } from 'react';
// import Navbar from './Components/Navbar';
// import Home from './Components/Home';
// import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };
  return (
    <>
        {isLoggedIn ? (
          <p>Welcome! You are logged in.</p>
        ) : (
          <Login onLogin={handleLogin} />
        )}
    </>
  );
}

export default App;
