import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";

function Game() {
  const { id } = useParams();
  const location = useLocation();
  const { profile } = location.state || { profile: null };

  const [resources, setResources] = useState({
    coins: 0,
    karma: 20,
    jailTime: null,
    inventory: null,
    stash: null,
  });

  useEffect(() => {
    // Load resources from local storage or initialize them
    const loadResources = () => {
      const savedResources = JSON.parse(localStorage.getItem(`resources-${id}`));
      if (savedResources) {
        setResources(savedResources);
      } else {
        const initialResources = {
          coins: 0,
          karma: 20,
          jailTime: null,
          inventory: null,
          stash: null,
        };
        setResources(initialResources);
        localStorage.setItem(`resources-${id}`, JSON.stringify(initialResources));
      }
    };

    if (profile) {
      loadResources();
    }
  }, [id, profile]);

  return (
    <div>
      <h1>Game Component</h1>
      {profile ? (
        <div>
          <h2>Profile ID: {id}</h2>
          <p>Profile Name: {profile.name}</p>
          <div>
            <h3>Resources</h3>
            <p>Coins: {resources.coins}</p>
            <p>Karma: {resources.karma}</p>
            <p>Jail Time: {resources.jailTime}</p>
            <p>Inventory: {resources.inventory}</p>
            <p>Stash: {resources.stash}</p>
          </div>
        </div>
      ) : (
        <p>No profile data available.</p>
      )}
    </div>
  );
}

export default Game;
