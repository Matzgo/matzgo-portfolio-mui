import React from "react";
import { Container, Box, Typography } from "@mui/material";
import Banner from "../../components/Banner";
import CardFeature from "../../components/CardFeature";
import ProjectLinks from "../../components/ProjectLinks";

export default function ProjectPage({
  bannerImage,
  bannerAdjustY = "100%",
  title,
  description,
  features = [],
  links = {},
}) {
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

        {/* Features Section */}
        {features.map((feature, index) => (
          <CardFeature
            key={index}
            imageSide={feature.imageSide}
            imageSrc={feature.imageSrc}
            title={feature.title}
            text={feature.text}
          />
        ))}

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
