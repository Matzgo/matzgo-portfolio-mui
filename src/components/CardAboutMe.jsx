import React from "react";
import { Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

export default function IntroSection() {
  return (
    <Box
      sx={{
        mr: 0,
        ml: 0,
        p: 2,
        backgroundColor: "background.secondary", // Adjust as needed
        borderRadius: 0,
        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.4)", // Optional shadow
        borderBottom: "2px solid", // Add a border
        borderLeft: "2px solid", // Add a border
        borderRight: "2px solid", // Add a border
        borderColor: "primary.main", // Use a color from the theme
        mb: 4, // Margin bottom for spacing
        display: "flex",
        flexDirection: "row", // Split the view horizontally
        justifyContent: "space-between", // Space between the two boxes
        alignItems: "flex-start", // Align items at the top
        gap: 2, // Add spacing between the two boxes
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Typography
          variant="h5"
          component="h1"
          sx={{
            mb: 0,
            textAlign: "left",
            fontWeight: "bold",
          }}
        >
          Matthias Mitschele
        </Typography>
        <Typography
          variant="h6"
          component="h1"
          sx={{
            mb: 2,
            textAlign: "left",
            opacity: 0.6,
            color: "text.primary",
            fontSize: "1.2rem", // Adjust the text size here
          }}
        >
          Master's Graduate in Informatics: Games Engineering
        </Typography>
        <Typography
          sx={{
            ml: { xs: 0, sm: 2 }, // Set ml: 0 on extra-small screens and ml: 2 on small screens and above
            mb: 2,
            textAlign: "left",
          }}
        >
          Hey this is a short introduction to who i am, these are the projects
          that i have worked on
        </Typography>
      </Box>
      <Box
        sx={{
          width: 115,
          maxWidth: "50%", // Limit the maximum width of the box
          mx: "auto", // Center the box horizontally
        }}
      >
        {/* Image Section */}
        <Box
          sx={{
            mb: 2, // Add margin below the image
            textAlign: "right", // Center the image horizontally
          }}
        >
          <img
            src="/about.jpg"
            alt="Description of the image"
            style={{
              maxWidth: "100%", // Ensure the image is responsive
              borderRadius: "8px", // Optional: Add rounded corners
            }}
          />
        </Box>

        <Button
          component={Link}
          to="/aboutme"
          sx={{
            width: "100%", // Full width button
            display: "flex", // Use flexbox for alignment
            justifyContent: "flex-end", // Align text and icon to the right
            bgcolor: "primary.main",
            gap: 0,
            textTransform: "none", // <- disables the automatic uppercase
            "&:hover": {
              bgcolor: "secondary.main", // This uses the darker variant from your theme
            },
          }}
        >
          <Typography color="brightText.primary" sx={{ mr: 0 }}>
            About Me
          </Typography>
          <ArrowRightIcon sx={{ fontSize: 25, color: "brightText.primary" }} />
        </Button>
      </Box>
    </Box>
  );
}
