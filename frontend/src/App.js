import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TranslationSite from './components/TranslationSite';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TranslationSite />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;