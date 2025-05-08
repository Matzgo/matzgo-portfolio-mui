import React from "react";
import { Container, Box, Typography } from "@mui/material";
import Banner from "../../components/Banner";
import CardFeature from "../../components/CardFeature";
import ProjectLinks from "../../components/ProjectLinks";
import TechnologyItem from "../../components/TechnologyItem";

export default function ProjectPage({ projectData }) {
  const {
    bannerImage,
    bannerAdjustY = "100%",
    title,
    description,
    features = [],
    links = {},
    technologiesUsed = [],
    videoLink,
  } = projectData;

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
            my: 2,
            mx: { xs: 2, sm: 4 },
            textAlign: "left",
            fontWeight: "bold",
          }}
        >
          {title}
        </Typography>

        {/* Description Section */}
        <Typography
          sx={{
            mt: 2,
            mb: 4,
            mx: { xs: 2, sm: 4 },
            textAlign: "left",
            fontWeight: "bold",
          }}
        >
          {description}
        </Typography>

        {/* Technologies Used Section */}
        <Typography
          variant="h5"
          component="h1"
          sx={{
            mx: { xs: 2, sm: 4 },
            textAlign: "center",
            fontWeight: "bold",
            mt: 0,
          }}
        >
          Technologies used:
        </Typography>

        {/* Icons Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
            mt: 2,
            mb: 3,
            px: 2,
          }}
        >
          {technologiesUsed.map((tech, index) => (
            <TechnologyItem key={index} tech={tech} />
          ))}
        </Box>

        {/* Features Section */}
        {features.map((feature, index) => (
          <CardFeature
            key={index}
            imageSide={index % 2 === 0 ? "left" : "right"}
            imageSrc={feature.imageSrc}
            title={feature.title}
            text={feature.text}
          />
        ))}

        {/* Video Section */}
        {videoLink && (
          <Box
            sx={{
              position: "relative",
              width: "100%",
              paddingTop: "56.25%", // 16:9 aspect ratio (9 / 16 = 0.5625)
              my: 4,
            }}
          >
            <iframe
              src={videoLink}
              title="Project Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            ></iframe>
          </Box>
        )}

        {/* Project Links Section */}
        <ProjectLinks
          githubLink={links.githubLink}
          steamLink={links.steamLink}
          itchIoLink={links.itchIoLink}
          customLink={links.customLink}
          customImage={links.customImage}
        />
      </Box>
    </Container>
  );
}
