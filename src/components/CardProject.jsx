import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Button from "@mui/material/Button";

export default function CardProject({
  imageSide = "left",
  imageSrc,
  title,
  date,
  description,
  toLink,
  icons = [], // Add an optional icons array prop
}) {
  return (
    <Box
      component={toLink ? Link : "div"} // Conditionally render as Link or div
      to={toLink || undefined} // Only pass `to` if `toLink` is provided
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
        textDecoration: "none", // Remove underline from the link
        "&:hover": {
          backgroundColor: toLink ? "background.hover" : "", // Add hover effect only if it's a link
          borderColor: toLink ? "bright.main" : "primary.main", // Change border color only if it's a link
          "& .moreAboutProjectText": {
            color: "bright.main", // Change text color on hover
          },
        },
      }}
    >
      {/* Image Section */}
      <Box
        sx={{
          flex: 1,
          textAlign: "center",
          borderColor: "primary.main",
          overflow: "hidden",
          maxWidth: "100%",
          height: "auto",
          maxHeight: { xs: "400px", sm: "auto" }, // Set a max height for the image
        }}
      >
        <img
          src={imageSrc}
          alt={title}
          style={{
            maxWidth: "100%",
            height: "auto",
            borderRadius: "0px",
            objectFit: "cover",
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
            mb: 0,
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
            color: "text.dark",
          }}
        >
          {date}
        </Typography>

        <Typography
          sx={{
            textAlign: "left",
            opacity: 0.8,
            color: "text.primary",
          }}
        >
          {description}
        </Typography>

        {/* Icons Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 2, // Space between icons
            mt: 2,
            mb: 1, // Margin top for spacing
          }}
        >
          {icons.map((Icon, index) => (
            <Icon key={index} size={30} />
          ))}
        </Box>
        <Typography
          className="moreAboutProjectText"
          sx={{
            mx: 4,
            textAlign: "right",
            opacity: 1,
            color: "text.dark",
            alignContent: "flex-end",
          }}
        >
          Learn more...
        </Typography>
      </Box>
    </Box>
  );
}
