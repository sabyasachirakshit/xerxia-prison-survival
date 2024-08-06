import React from "react";
import { useParams, useLocation } from "react-router-dom";
// import save from "../media/68747470733a2f2f696d6d6f7274616c652d6465762e6769746875622e696f2f61636f6c6f616465722f696d67732f61636f2e676966.gif"
import save from "../media/ezgif-2-e5a6f8f93a.gif";
function ServePrison() {
  const { id } = useParams();
  const location = useLocation();
  const { profile, resources } = location.state || {
    profile: null,
    resources: null,
  };

  return (
    <div style={{ backgroundColor: "black", color: "white", height: "100vh" }}>
      <h1 style={{ margin: 0, padding: 0 }}>Serve Prison</h1>
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
            <div className="save" style={{ display: "flex", gap: 3 }}>
              <img src={save} alt="save" style={{ height: 50, width: 50 }} />{" "}
              <h3 style={{position:"relative",top:-7}}>Saving..</h3>
            </div>
          </div>
        </div>
      ) : (
        <p>No profile or resource data available.</p>
      )}
    </div>
  );
}

export default ServePrison;
