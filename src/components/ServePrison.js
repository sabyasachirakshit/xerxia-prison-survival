import React from "react";
import { useParams, useLocation } from "react-router-dom";

function ServePrison() {
  const { id } = useParams();
  const location = useLocation();
  const { profile, resources } = location.state || { profile: null, resources: null };

  return (
    <div>
      <h1>Serve Prison</h1>
      {profile && resources ? (
        <div>
          <h2>Profile ID: {id}</h2>
          <p>Profile Name: {profile.name}</p>
          <div>
            <h3>Resources</h3>
            <p>Coins: {resources.coins}</p>
            <p>Karma: {resources.karma}</p>
            <p>Jail Time: {resources.jailTime} years</p>
            <p>Inventory: {resources.inventory}</p>
            <p>Stash: {resources.stash}</p>
          </div>
        </div>
      ) : (
        <p>No profile or resource data available.</p>
      )}
    </div>
  );
}

export default ServePrison;
