import React from "react";
import { Box, Typography } from "@mui/material";

export default function AboutCardStudies({ degrees }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        py: 2,
        px: { xs: 1, sm: 4 },
        backgroundColor: "background.secondary",
        borderRadius: 0,
        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.4)",
        border: "2px solid",
        borderColor: "primary.main",
        mb: 4,
      }}
    >
      {/* Header */}
      <Typography
        variant="h4"
        component="h2"
        sx={{
          textAlign: "left",
          fontWeight: "bold",
          color: "text.primary",
          mb: 2,
          px: { xs: 1, sm: "none" },
        }}
      >
        Studies:
      </Typography>

      {/* Degrees List */}
      <Box>
        {degrees.map((degree, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              mb: 1,
              border: "2px solid",
              px: 2,
              borderColor: "primary.main",
              backgroundColor: "background.primary",
              py: 1,
            }}
          >
            {/* Degree Text */}
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  textAlign: "left",
                  color: "text.primary",
                }}
              >
                {degree.title}
              </Typography>
              <Typography
                sx={{
                  textAlign: "left",
                  opacity: 0.8,
                  color: "text.dark",
                }}
              >
                {degree.institution} - {degree.year}
              </Typography>
            </Box>

            {/* Degree Image */}
            {degree.image && (
              <Box
                sx={{
                  flexShrink: 0,
                  my: 1,
                  ml: 1,
                  width: 60,
                  height: 60,
                  overflow: "hidden",
                  border: "3px solid",
                  borderRadius: "10%",
                  borderColor: "primary.main",
                  backgroundColor: "background.secondary",
                }}
              >
                <img
                  src={degree.image}
                  alt={degree.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
