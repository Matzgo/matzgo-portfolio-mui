import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Socials from "../components/Socials";
import CardAboutMe from "../components/CardAboutMe";
import CardProject from "../components/CardProject";
import { projectsData } from "../data/projectsData";

export default function Home({ homeScrollPosition }) {
  const navigate = useNavigate();

  useEffect(() => {
    const restoreScroll = () => {
      //console.log("Restoring scroll position:", homeScrollPosition.current);
      window.scrollTo(0, homeScrollPosition.current);
    };

    // Restore scroll position after rendering
    const timeout = setTimeout(restoreScroll, 0);

    return () => {
      clearTimeout(timeout);
    };
  }, [homeScrollPosition]);

  const handleNavigation = (to) => {
    // Save the current scroll position before navigating
    homeScrollPosition.current = window.scrollY;
    //console.log("Saving scroll position before navigation:", homeScrollPosition.current);
    navigate(to); // Perform the navigation
  };

  return (
    <Container maxWidth="md" disableGutters>
      <Box
        sx={{
          pt: 0,
          pb: 3,
          backgroundColor: "background.primary",
        }}
      >
        <CardAboutMe onClick={() => handleNavigation(`/aboutme`)} />

        <Typography
          variant="h4"
          component="h1"
          sx={{
            mb: 2,
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Projects
        </Typography>

        {Object.keys(projectsData).map((key, index) => {
          const project = projectsData[key];
          return (
            <CardProject
              key={key}
              imageSide={index % 2 === 0 ? "left" : "right"}
              imageSrc={project.previewImage}
              title={project.title}
              date={project.date}
              description={project.shortDescription}
              onClick={() => handleNavigation(`/projects/${key}`)}
              icons={project.technologiesUsed}
            />
          );
        })}

        <Socials />
      </Box>
    </Container>
  );
}
