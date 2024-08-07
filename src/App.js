import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import LoadProfile from './components/LoadProfile';
import Game from './components/Game';
import ServePrison from './components/ServePrison';
import FullScreenVideo from './FullScreenVideo';

function App() {
  const [videoPlayed, setVideoPlayed] = useState(true);

  const handleVideoEnd = () => {
    setVideoPlayed(true);
  };

  return (
    <Router>
      {!videoPlayed && <FullScreenVideo onVideoEnd={handleVideoEnd} />}
      {videoPlayed && (
        <Routes>
          <Route path="/" element={<LoadProfile />} />
          <Route path="/game/:id" element={<Game />} />
          <Route path="/serve-prison/:id" element={<ServePrison />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
