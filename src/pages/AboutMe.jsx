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

export default function AboutMe() {
  return (
    <>
      <Container maxWidth="md" disableGutters>
        <Box
          sx={{
            pt: 0,
            pb: 3,
            backgroundColor: "background.secondary",
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            sx={{
              mb: 2,
              pt: 4,
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            About Me
          </Typography>

          {/* Social Media Links Section */}
          <Socials />
        </Box>
      </Container>
    </>
  );
}
