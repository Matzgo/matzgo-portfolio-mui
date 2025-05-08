import React, { useRef, useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { techData } from "../data/techData"; // Import tech data

export default function CardProject({
  imageSide = "left",
  previewImageAdjust = "50% 50%",
  imageSrc,
  title,
  date,
  description,
  icons = [],
  onClick,
}) {
  const textSectionRef = useRef(null); // Ref for the text section
  const [textSectionHeight, setTextSectionHeight] = useState(0); // State to store the height

  const updateTextSectionHeight = () => {
    if (textSectionRef.current) {
      setTextSectionHeight(textSectionRef.current.offsetHeight); // Get the height of the text section
    }
  };

  useEffect(() => {
    // Update the height on mount
    updateTextSectionHeight();
    // Add event listener for window resize
    window.addEventListener("resize", updateTextSectionHeight);
    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", updateTextSectionHeight);
    };
  }, []);

  return (
    <Box
      onClick={onClick}
      sx={{
        display: "flex",
        cursor: "pointer",
        flexDirection: {
          xs: "column",
          sm: imageSide === "left" ? "row" : "row-reverse",
        },
        alignItems: "flex-start", // Ensure both sections stretch to the same height
        gap: 2,
        p: 0,
        backgroundColor: "background.secondary",
        borderRadius: 0,
        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.4)",
        border: "2px solid",
        borderColor: "primary.main",
        mb: 2,
        textDecoration: "none",
        "&:hover": {
          backgroundColor: "background.hover",
          borderColor: "bright.main",
          "& .moreAboutProjectText": {
            color: "bright.main",
          },
        },
      }}
    >
      {/* Image Section */}
      <Box
        sx={{
          flex: 1,
          textAlign: "center",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: `${textSectionHeight}px`, // Set the height dynamically
          maxHeight: { xs: 200, sm: `${textSectionHeight}px` }, // Set a max height for smaller screens
          borderRight: imageSide === "left" ? "2px solid" : "none",
          borderLeft: imageSide === "right" ? "2px solid" : "none",
          borderColor: "primary.main",
        }}
      >
        <img
          src={imageSrc}
          alt={title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: `${previewImageAdjust}`,
            display: "block",
          }}
        />
      </Box>

      {/* Text Section */}
      <Box
        ref={textSectionRef} // Attach the ref to the text section
        sx={{
          flex: 2,
          p: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <Typography
          variant="h5"
          component="h2"
          sx={{
            mb: 0,
            fontWeight: "bold",
            textAlign: "left",
            color: "text.primary",
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
            gap: 2,
            mt: 2,
            mb: 1,
          }}
        >
          {icons.map((key, index) => {
            const tech = techData[key]; // Retrieve the tech data
            return tech?.Icon ? <tech.Icon key={index} size={30} /> : null; // Render the icon if it exists
          })}
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
