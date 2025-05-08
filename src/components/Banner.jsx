import { Container, Box, Link } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack"; // Import a back arrow icon
import { Link as RouterLink } from "react-router-dom"; // For routing
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
export default function Banner({ imageSrc, adjustY = "100%", backLink = "/" }) {
  return (
    <Container
      maxWidth={false}
      sx={{
        p: 0,
        m: 0,
        width: "100%",
        "@media (min-width:600px)": {
          px: 0,
        },
      }}
    >
      <Box
        sx={{
          position: "relative", // Enable absolute positioning for children
          width: "100%",
          aspectRatio: "3 / 1", // Enforce 3:1 aspect ratio
          overflow: "hidden",
          backgroundColor: "#0f0f0f",
        }}
      >
        {/* Back Button */}
        <Link
          component={RouterLink}
          to={backLink}
          sx={{
            position: "absolute",
            top: 16, // Adjust spacing from the top
            left: 0, // Adjust spacing from the left
            zIndex: 10, // Ensure it appears above the image
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 80,
            height: 50,
            borderRight: "2px solid",
            borderBottom: "2px solid",
            borderTop: "2px solid",
            borderLeft: "2px solid",
            borderTopRightRadius: "8px",
            borderBottomRightRadius: "8px",
            borderColor: "background.primary",
            borderLeftColor: "primary.main",
            backgroundColor: "primary.main", // Semi-transparent background
            color: "white",
            textDecoration: "none",
            "&:hover": {
              borderColor: "background.secondary", // Darker on hover
              borderColor: "bright.main", // Darker on hover
            },
          }}
        >
          <ArrowBackIcon
            sx={{
              fontSize: 32, // Set the desired size in pixels
              color: "text.primary",
            }}
          />
        </Link>

        {/* Banner Image */}
        <img
          src={imageSrc}
          alt="Banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: `center ${adjustY}`, // Adjust Y-position dynamically
            borderRadius: "0px",
          }}
        />
      </Box>
    </Container>
  );
}
