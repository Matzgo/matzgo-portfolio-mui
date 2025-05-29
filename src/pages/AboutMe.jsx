import React from "react";
import { Container, Box, Typography } from "@mui/material";
import Banner from "../components/Banner";
import TechnologyItem from "../components/TechnologyItem";
import { aboutData } from "../data/aboutData";
import ProjectLinks from "../components/ProjectLinks";
import Socials from "../components/Socials"; // Import the Socials component
import { Link } from "@mui/material";
import { useEffect } from "react";
import AboutCardStudies from "../components/AboutCardStudies";
import Button from "@mui/material/Button"; // Import the Button component

export default function AboutMe() {
  const {
    bannerImage,
    bannerAdjustY,
    name,
    workTitle,
    mail,
    description,
    degrees,
    technologiesUsed,
    cvPath,
  } = aboutData;
  // Scroll to the top when the project ID changes
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  });

  return (
    <Container maxWidth="md" disableGutters>
      <Box
        sx={{
          pt: 0,
          pb: 3,
          backgroundColor: "background.secondary",
        }}
      >
        {/* Banner Section */}
        <Banner imageSrc={bannerImage} adjustY={bannerAdjustY} />

        {/* Title Section */}
        <Typography
          variant="h4"
          component="h1"
          sx={{
            mx: { xs: 2, sm: 4 },
            mt: 2,
            textAlign: "left",
            fontWeight: "bold",
          }}
        >
          {name}
        </Typography>
        <Typography
          variant="h6"
          component="h1"
          sx={{
            mb: 2,
            mx: { xs: 2, sm: 4 },
            textAlign: "left",
            opacity: 0.6,
            color: "text.primary",
            fontSize: "1.2rem", // Adjust the text size here
          }}
        >
          {workTitle}
        </Typography>
        {/* Description Section */}
        <Typography
          sx={{
            mt: 2,
            mb: 3,
            mx: { xs: 2, sm: 4 },
            textAlign: "left",
            fontWeight: "none",
          }}
        >
          {description}
        </Typography>
        {/* Mail and CV Download Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" }, // Column for mobile, row for larger screens
            justifyContent: "space-between", // Space between Contact Me and the button
            alignItems: { xs: "flex-start", sm: "center" }, // Align items properly
            mt: 0,
            mb: 4,
            mx: { xs: 2, sm: 4 }, // Add horizontal margin
            gap: { xs: 2, sm: 0 }, // Add spacing between elements on mobile
          }}
        >
          {/* Contact Me Section */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                textAlign: "left",
                fontWeight: "bold",
                color: "text.primary",
              }}
            >
              Contact Me:
            </Typography>
            <Link
              href={`mailto:${mail}`}
              sx={{
                ml: 2,
                textDecoration: "none",
                color: "text.link",
                fontWeight: "bold",
                fontSize: "1.2rem",
                "&:hover": {
                  color: "text.linkHover",
                },
              }}
            >
              {mail}
            </Link>
          </Box>

          {/* CV Download Section */}
          <Button
            variant="contained"
            color="primary"
            href={cvPath} // Path to your CV file in the public folder
            sx={{
              textTransform: "none",
              fontWeight: "bold",
              fontSize: "1rem",
              alignSelf: { xs: "center", sm: "flex-end" }, // Align button properly
            }}
          >
            Download My CV
          </Button>
        </Box>

        {/* Degrees Section */}
        <AboutCardStudies degrees={degrees} />

        {/* Technologies Section */}
        <Typography
          variant="h5"
          component="h2"
          sx={{
            mx: { xs: 2, sm: 4 },
            textAlign: "center",
            fontWeight: "bold",
            mt: 0,
          }}
        >
          Skills:
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
            mt: 2,
            mb: 4,
            px: 2,
          }}
        >
          {technologiesUsed.map((tech, index) => (
            <TechnologyItem key={index} tech={tech} />
          ))}
        </Box>
        <Socials></Socials>
      </Box>
    </Container>
  );
}
