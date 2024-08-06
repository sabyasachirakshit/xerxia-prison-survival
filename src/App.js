import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import LoadProfile from './components/LoadProfile';
import Game from './components/Game';
import ServePrison from './components/ServePrison';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoadProfile />} />
        <Route path="/game/:id" element={<Game />} />
        <Route path="/serve-prison/:id" element={<ServePrison />} />
      </Routes>
    </Router>
  );
}

export default App;
