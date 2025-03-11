import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Gallery from './components/Gallery.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/tailwind.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);