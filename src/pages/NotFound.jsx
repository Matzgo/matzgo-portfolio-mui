import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import { Container } from "@mui/material";

const NotFound = () => {
  return (
    <Container maxWidth="md" disableGutters>
      <Box
        sx={{
          pt: 0,
          pb: 3,
          backgroundColor: "background.secondary",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            textAlign: "center",
            p: 4,
          }}
        >
          <Typography variant="h3" gutterBottom>
            404 - Page Not Found
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            The page you’re looking for doesn’t exist.
          </Typography>
          <Button component={Link} to="/" variant="contained" color="primary">
            Home
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default NotFound;
