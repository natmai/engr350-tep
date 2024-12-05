import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Spotify from './pages/Spotify.js'; 
import MaiPage from './pages/Mai'; 
import './pages/Spotify.css';
import './pages/Mai.css';
import ScrollToTop from './components/ScrollToTop';


const App = () => {
  return (
    <Router>

      <Routes>
        <Route path="/spotify" element={<Spotify />} />
        <Route path="/spotify/mai" element={<MaiPage />} /> 
        
      </Routes>
      
    </Router>
  );
};

export default App;
