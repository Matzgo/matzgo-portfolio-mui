import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ProTip from "../ProTip"; // Adjust the path as needed
import { Button, Link as MUILink } from "@mui/material";
import Socials from "../components/Socials";
import Banner from "../components/Banner";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import CardAboutMe from "../components/CardAboutMe";
import CardProject from "../components/CardProject";
import {
  CsharpOriginal,
  UnityOriginal,
  BlenderOriginal,
  GitPlain,
  CplusplusOriginal,
  PythonOriginal,
  ReactOriginal,
  VscodeOriginal,
  VisualstudioOriginal,
  GoOriginal,
  DockerOriginal,
} from "devicons-react";

function IconLink() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ display: "flex", alignItems: "center", my: 4 }}>
        <HomeIcon sx={{ fontSize: 40, mr: 2 }} />{" "}
        {/* Adjust fontSize and margin as needed */}
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Typography variant="h6">Home</Typography>
        </Link>
      </Box>
    </Container>
  );
}

export default function Home() {
  return (
    <>
      <Container maxWidth="md" disableGutters>
        <Box
          sx={{
            pt: 0,
            pb: 3,
            backgroundColor: "background.primary",
          }}
        >
          <CardAboutMe></CardAboutMe>

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

          <CardProject
            imageSide="left"
            imageSrc="siegebound.png"
            title="Siegebound - Roguelike Strategy Game"
            date="2023 - present"
            description="Siegebound is a roguelike strategy game where you build and defend a fortress through waves of escalating sieges."
            toLink="/siegebound"
            icons={[
              UnityOriginal,
              CsharpOriginal,
              BlenderOriginal,
              GitPlain,
              VisualstudioOriginal,
            ]}
          />
          <CardProject
            imageSide="right"
            imageSrc="CodingInterface.png"
            title="Master's Thesis - Code Vanguard"
            date="2024 - April 2025"
            toLink="/codevanguard"
            description="This is a description of Project 1. It showcases some amazing features."
            icons={[
              UnityOriginal,
              CsharpOriginal,
              BlenderOriginal,
              GitPlain,
              VisualstudioOriginal,
            ]}
          />
          <CardProject
            imageSide="left"
            imageSrc="CodingInterface.png"
            title="React Websites - Portfolio and Business"
            date="2024 - 2025"
            toLink="/project1"
            description="This is a description of Project 1. It showcases some amazing features."
            icons={[ReactOriginal, VscodeOriginal]}
          />
          <CardProject
            imageSide="right"
            imageSrc="siegebound.png"
            title="Deep Learning - Point Cloud Feature Completion"
            date="2024"
            description="This is a description of Project 1. It showcases some amazing features."
            toLink="/project1"
            icons={[PythonOriginal, VscodeOriginal]}
          />

          <CardProject
            imageSide="left"
            imageSrc="CodingInterface.png"
            date="2023"
            title="AR Magnet Visualization"
            toLink="/project1"
            description="This is a description of Project 1. It showcases some amazing features."
            icons={[
              UnityOriginal,
              CsharpOriginal,
              BlenderOriginal,
              GitPlain,
              VisualstudioOriginal,
            ]}
          />
          <CardProject
            imageSide="right"
            imageSrc="siegebound.png"
            date="2022"
            title="Peer to Peer - Cyber Security"
            description="This is a description of Project 1. It showcases some amazing features."
            toLink="/project1"
            icons={[GoOriginal, DockerOriginal, VscodeOriginal]}
          />
          <CardProject
            imageSide="left"
            imageSrc="CodingInterface.png"
            title="Bachelor's Thesis - AR Tennis"
            date="2021"
            toLink="/project1"
            description="This is a description of Project 1. It showcases some amazing features."
            icons={[
              UnityOriginal,
              CsharpOriginal,
              BlenderOriginal,
              GitPlain,
              VisualstudioOriginal,
            ]}
          />

          <CardProject
            imageSide="right"
            imageSrc="CodingInterface.png"
            title="Geolocation Detective Game"
            date="2019"
            toLink="/project1"
            description="This is a description of Project 1. It showcases some amazing features."
            icons={[
              UnityOriginal,
              CsharpOriginal,
              BlenderOriginal,
              GitPlain,
              VisualstudioOriginal,
            ]}
          />
          <CardProject
            imageSide="left"
            imageSrc="CodingInterface.png"
            title="VR Puzzle Game"
            date="2019"
            toLink="/project1"
            description="This is a description of Project 1. It showcases some amazing features."
            icons={[
              UnityOriginal,
              CsharpOriginal,
              BlenderOriginal,
              GitPlain,
              VisualstudioOriginal,
            ]}
          />

          <CardProject
            imageSide="right"
            imageSrc="CodingInterface.png"
            title="Other Games and Prototypes"
            date="2016 - 2019"
            toLink="/project1"
            description="This is a description of Project 1. It showcases some amazing features."
            icons={[
              UnityOriginal,
              CsharpOriginal,
              BlenderOriginal,
              GitPlain,
              VisualstudioOriginal,
            ]}
          />

          {/* Social Media Links Section */}
          <Socials />
        </Box>
      </Container>
    </>
  );
}
