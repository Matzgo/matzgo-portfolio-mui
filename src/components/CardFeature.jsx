import React from "react";
import { Box, Typography } from "@mui/material";

export default function CardFeature({
  imageSide = "left",
  imageSrc,
  title,
  text,
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column", // Stack image and text vertically on mobile
          sm: imageSide === "left" ? "row" : "row-reverse", // Horizontal layout for larger screens
        },
        alignItems: "flex-start",
        gap: 2,
        p: 0,
        backgroundColor: "background.secondary",
        borderRadius: 0,
        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.4)",
        border: "2px solid",
        borderColor: "primary.main",
        mb: 2,
      }}
    >
      {/* Image Section */}
      <Box
        sx={{
          flex: 1,
          textAlign: "center",
          borderColor: "primary.main",
        }}
      >
        <img
          src={imageSrc}
          alt={title}
          style={{
            maxWidth: "100%",
            borderRadius: "0px",
            height: "auto",
            display: "block", // Remove inline spacing
          }}
        />
      </Box>

      {/* Text Section */}
      <Box
        sx={{
          p: 2,
          flex: 2,
          height: "100%", // Ensure it takes full height
          display: "flex", // Use flexbox for alignment
          flexDirection: "column", // Stack text vertically
          justifyContent: "flex-start", // Align content to the top
        }}
      >
        <Typography
          variant="h5"
          component="h2"
          sx={{
            mb: 1,
            fontWeight: "bold",
            textAlign: "left",
            color: "text.primary", // Explicitly set the color to override link styles
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            textAlign: "left",
            opacity: 0.8,
            color: "text.primary",
          }}
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
}
