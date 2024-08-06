import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileSlot from "./ProfileSlot";
import { Box } from "@mui/material";

function LoadProfile() {
  const [profiles, setProfiles] = useState(Array(10).fill(null));
  const navigate = useNavigate();

  useEffect(() => {
    const savedProfiles = JSON.parse(localStorage.getItem("profiles"));
    if (savedProfiles) {
      setProfiles(savedProfiles);
    }
  }, []);

  const handleSelectProfile = (index) => {
    if (profiles[index]) {
      // If the profile already exists, navigate to the game component
      navigate(`/game/${index}`, { state: { profile: profiles[index] } });
    } else {
      // If the profile doesn't exist, prompt for a new profile name
      const profileName = prompt("Enter profile name:");
      if (profileName) {
        const newProfiles = [...profiles];
        newProfiles[index] = { name: profileName };
        setProfiles(newProfiles);
        localStorage.setItem("profiles", JSON.stringify(newProfiles));
        // Navigate to the game component after saving the new profile
        navigate(`/game/${index}`, { state: { profile: newProfiles[index] } });
      }
    }
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1>LOAD PROFILE</h1>
      <div className="profiles-list" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Box
          component="div"
          sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}
        >
          {profiles.slice(0, 5).map((profile, index) => (
            <ProfileSlot
              key={index}
              index={index}
              profile={profile}
              onSelect={handleSelectProfile}
            />
          ))}
        </Box>
        <Box
          component="div"
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          {profiles.slice(5).map((profile, index) => (
            <ProfileSlot
              key={index + 5}
              index={index + 5}
              profile={profile}
              onSelect={handleSelectProfile}
            />
          ))}
        </Box>
      </div>
    </div>
  );
}

export default LoadProfile;
