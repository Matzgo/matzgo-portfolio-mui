import { Box, Link } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram"; // Instagram icon
import YouTubeIcon from "@mui/icons-material/YouTube"; // YouTube icon
import { ReactComponent as SteamIcon } from "./steamIcon.svg"; // Adjust path if needed
import GitHubIcon from "@mui/icons-material/GitHub";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSteam } from "@fortawesome/free-brands-svg-icons";

export default function Socials() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
      <Link
        href="https://www.instagram.com/peasant.games"
        target="_blank"
        sx={{
          display: "flex",
          alignItems: "center",
          mx: 5,
          "&:hover svg": {
            // Change color of the icon on hover
            color: "brightText.primary", // Set your desired hover color here
          },
        }}
      >
        <GitHubIcon sx={{ fontSize: 80, color: "#806252" }} />
      </Link>
      <Link
        href="https://www.youtube.com/@Peasant-Games"
        target="_blank"
        sx={{
          display: "flex",
          alignItems: "center",
          mx: 5,
          "&:hover svg": {
            // Change color of the icon on hover
            color: "brightText.primary", // Set your desired hover color here
          },
        }}
      >
        <YouTubeIcon sx={{ fontSize: 80, color: "#806252" }} />
      </Link>
    </Box>
  );
}
