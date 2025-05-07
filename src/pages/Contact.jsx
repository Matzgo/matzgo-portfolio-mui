import { Container, Box, Typography, Link } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email"; // Import the Email icon
import Banner from "../components/Banner";
import Socials from "../components/Socials";

export default function Contact() {
  return (
    <>
      <Container maxWidth="md" disableGutters>
        <Box
          sx={{
            p: 6,
            backgroundColor: "background.primary",
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            sx={{
              mb: 2,
              textAlign: "center",
              fontWeight: "bold",
              fontFamily: "MedievalSharp",
            }}
          >
            Contact Me
          </Typography>
          <Typography
            sx={{
              mb: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center", // Center the icon and text horizontally
            }}
          >
            <EmailIcon sx={{ mr: 1, color: "#FFD580" }} />
            <Link
              href="mailto:contact@matzgo.com"
              sx={{
                color: "#FFD580",
                textDecoration: "none", // Disable default underline
                "&:hover": {
                  color: "orange",
                },
                "&:active": {
                  color: "gray",
                },
                "&:hover, &:focus": {
                  textDecoration: "underline", // Add underline on hover or focus
                },
              }}
            >
              contact@matzgo.com
            </Link>
          </Typography>

          <Socials></Socials>
        </Box>
      </Container>
    </>
  );
}
