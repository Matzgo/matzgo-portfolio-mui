import React from "react";
import { Box, Typography } from "@mui/material";
import { techData } from "../data/techData"; // Import the tech data

export default function TechnologyItem({ tech }) {
  const techInfo = techData[tech]; // Get the tech data object
  const Icon = techInfo?.Icon; // Get the icon component
  const title = techInfo?.title || tech; // Get the title or fallback to the raw tech name

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minWidth: 80, // Ensure consistent width for items
        textAlign: "center",
      }}
    >
      {Icon && <Icon size={40} />} {/* Render the icon if it exists */}
      <Typography
        sx={{
          mt: 1,
          fontSize: "0.875rem", // Smaller font size
          color: "text.primary",
        }}
      >
        {title} {/* Render the title */}
      </Typography>
    </Box>
  );
}
