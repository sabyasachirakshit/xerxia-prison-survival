import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

function Game() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { profile } = location.state || { profile: null };

  const [resources, setResources] = useState({
    coins: 100,
    karma: 20,
    jailTime: null,
    inventory: null,
    stash: null,
  });

  useEffect(() => {
    const loadResources = () => {
      const savedResources = JSON.parse(
        localStorage.getItem(`resources-${id}`)
      );
      if (savedResources) {
        setResources(savedResources);
      } else {
        const initialResources = {
          coins: 100,
          karma: 20,
          jailTime: null,
          inventory: null,
          stash: null,
        };
        setResources(initialResources);
        localStorage.setItem(
          `resources-${id}`,
          JSON.stringify(initialResources)
        );
      }
    };

    if (profile) {
      loadResources();
    }
  }, [id, profile]);

  const randomizeJailTime = () => {
    const possibleSentences = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    const randomSentence =
      possibleSentences[Math.floor(Math.random() * possibleSentences.length)];
    setResources((prevResources) => ({
      ...prevResources,
      jailTime: randomSentence,
    }));
  };

  const handleServePrison = () => {
    const updatedResources = {
      ...resources,
    };
    localStorage.setItem(`resources-${id}`, JSON.stringify(updatedResources));
    navigate(`/serve-prison/${id}`, { state: { resources, profile } });
  };

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
            <button onClick={randomizeJailTime}>Randomize Jail Time</button>
            {resources.jailTime && (
              <button onClick={handleServePrison}>Serve Prison</button>
            )}
          </div>
        </div>
      ) : (
        <p>No profile data available.</p>
      )}
    </div>
  );
}

export default Game;
