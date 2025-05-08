import { Box, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSteam, faItchIo } from "@fortawesome/free-brands-svg-icons";

export default function ProjectLinks({
  githubLink,
  steamLink,
  itchIoLink,
  customLink,
  customImage,
}) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 6,
        pb: githubLink || steamLink || itchIoLink || customImage ? 4 : 0,
      }}
    >
      {/* GitHub Link */}
      {githubLink && (
        <Link
          href={githubLink}
          target="_blank"
          sx={{
            display: "flex",
            alignItems: "center",
            mx: 5,
            "&:hover svg": {
              color: "brightText.primary", // Change color on hover
            },
          }}
        >
          <GitHubIcon sx={{ fontSize: 80, color: "#806252" }} />
        </Link>
      )}

      {/* Steam Link */}
      {steamLink && (
        <Link
          href={steamLink}
          target="_blank"
          sx={{
            display: "flex",
            alignItems: "center",
            mx: 5,
            "& .steamIcon": {
              width: "80px",
              height: "80px",
              color: "#806252",
              transition: "color 0.3s ease, transform 0.3s ease", // Smooth transition for hover effect
            },
            "&:hover .steamIcon": {
              color: "brightText.primary", // Change color on hover
              transform: "scale(1.05)", // Slightly scale the icon on hover
            },
          }}
        >
          <FontAwesomeIcon icon={faSteam} className="steamIcon" />
        </Link>
      )}

      {itchIoLink && (
        <Link
          href={itchIoLink}
          target="_blank"
          sx={{
            display: "flex",
            alignItems: "center",
            mx: 5,
            "& .itchIoIcon": {
              width: "80px",
              height: "80px",
              color: "#806252",
              transition: "color 0.3s ease, transform 0.3s ease", // Smooth transition for hover effect
            },
            "&:hover .itchIoIcon": {
              color: "brightText.primary", // Change color on hover
              transform: "scale(1.05)", // Slightly scale the icon on hover
            },
          }}
        >
          <FontAwesomeIcon icon={faItchIo} className="itchIoIcon" />
        </Link>
      )}

      {/* Custom Link with PNG */}
      {customLink && customImage && (
        <Link
          href={customLink}
          target="_blank"
          sx={{
            display: "flex",
            alignItems: "center",
            mx: 5,
            "& img": {
              width: "80px",
              height: "80px",
              transition: "filter 0.3s ease, transform 0.3s ease", // Smooth transition for hover effect
            },
            "&:hover img": {
              filter: "brightness(1.3)", // Darken the image on hover
              transform: "scale(1.05)", // Slightly scale the image on hover
            },
          }}
        >
          <img src={customImage} alt="Custom Link" />
        </Link>
      )}
    </Box>
  );
}
