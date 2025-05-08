import { Box, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function Footer() {
  return (
    <Box
      id="footer"
      sx={{
        display: "flex",
        justifyContent: "center", // Centers the links horizontally
        gap: 6, // Space between the links
        py: 2, // Padding for top and bottom spacing
      }}
    >
      <Link
        component={RouterLink}
        to="/"
        sx={{
          color: "text.primary",
          textDecoration: "none",
          fontWeight: "bold",
          "&:hover": {
            color: "text.dark",
          },
          "&:active": {
            color: "gray",
          },
        }}
      >
        Portfolio
      </Link>
      <Link
        component={RouterLink}
        to="/contact"
        sx={{
          color: "text.primary",
          textDecoration: "none",
          fontWeight: "bold",

          "&:hover": {
            color: "text.dark",
          },
          "&:active": {
            color: "gray",
          },
        }}
      >
        Contact
      </Link>
      <Link
        component={RouterLink}
        to="/impressum"
        sx={{
          color: "text.primary",
          textDecoration: "none",
          fontWeight: "bold",
          "&:hover": {
            color: "text.dark",
          },
          "&:active": {
            color: "gray",
          },
        }}
      >
        Impressum
      </Link>
    </Box>
  );
}
