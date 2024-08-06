import React from "react";
import { useParams, useLocation } from "react-router-dom";

function Game() {
  const { id } = useParams();
  const location = useLocation();
  const { profile } = location.state || { profile: null };

  return (
    <div>
      <h1>Game Component</h1>
      {profile ? (
        <div>
          <h2>Profile ID: {id}</h2>
          <p>Profile Name: {profile.name}</p>
        </div>
      ) : (
        <p>No profile data available.</p>
      )}
    </div>
  );
}

export default Game;
