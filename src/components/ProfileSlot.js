import React from "react";
import { Box } from "@mui/material";

function ProfileSlot({ profile, index, onSelect }) {
  return (
    <Box
      component="div"
      sx={{ p: 2, border: '2px solid', cursor: 'pointer', margin: 1 }}
      onClick={() => onSelect(index)}
    >
      {profile ? `Profile ${index + 1}: ${profile.name}` : `Empty Slot ${index + 1}`}
    </Box>
  );
}

export default ProfileSlot;
