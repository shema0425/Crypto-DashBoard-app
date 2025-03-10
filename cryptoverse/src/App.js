import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CryptoDetail from './pages/CryptoDetail';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crypto/:id" element={<CryptoDetail />} />
      </Routes>
    </div>
  );
}

export default App;