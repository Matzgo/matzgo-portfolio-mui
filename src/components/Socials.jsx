import { Box, Link } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram"; // Instagram icon
import YouTubeIcon from "@mui/icons-material/YouTube"; // YouTube icon
import { ReactComponent as SteamIcon } from "./steamIcon.svg"; // Adjust path if needed
import GitHubIcon from "@mui/icons-material/GitHub";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSteam } from "@fortawesome/free-brands-svg-icons";

export default function Socials() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 6,
      }}
    >
      <Link
        href="https://github.com/Matzgo"
        target="_blank"
        sx={{
          display: "flex",
          alignItems: "center",
          mx: { xs: 2, sm: 5 },

          "& svg": {
            transition: "color 0.3s ease, transform 0.3s ease", // Base transition for both color and transform
            transform: "scale(1)", // Set initial scale
          },

          "&:hover svg": {
            // Change color of the icon on hover
            color: "bright.main", // Set your desired hover color here

            transform: "scale(1.05)", // Slightly scale the image on hover
          },
        }}
      >
        <GitHubIcon sx={{ fontSize: 80, color: "#806252" }} />
      </Link>

      <Link
        href="https://www.peasant-games.com"
        target="_blank"
        sx={{
          display: "flex",
          alignItems: "center",
          mx: { xs: 2, sm: 5 },
          "& img": {
            width: "80px",
            height: "80px",
            transition: "filter 0.3s ease, transform 0.3s ease",
          },
          "&:hover img": {
            filter: "brightness(1.3)", // Darken the image on hover
            transform: "scale(1.05)", // Slightly scale the image on hover
          },
        }}
      >
        <img src="/custom/pgLogo.png" alt="Custom Link" />
      </Link>

      <Link
        href="https://www.youtube.com/@Peasant-Games"
        target="_blank"
        sx={{
          display: "flex",
          alignItems: "center",
          mx: { xs: 2, sm: 5 },

          "& svg": {
            transition: "color 0.3s ease, transform 0.3s ease", // Base transition for both color and transform
            transform: "scale(1)", // Set initial scale
          },
          "&:hover svg": {
            // Change color of the icon on hover
            color: "bright.main", // Set your desired hover color here
            transform: "scale(1.05)", // Slightly scale the image on hover
          },
        }}
      >
        <YouTubeIcon sx={{ fontSize: 80, color: "#806252" }} />
      </Link>
    </Box>
  );
}
