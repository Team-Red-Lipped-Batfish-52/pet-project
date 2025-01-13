import React from 'react';
import './App.css';
import LandingPage from './pages/LandingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/search-page' element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
