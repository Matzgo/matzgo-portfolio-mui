import React, { useRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme";
import Footer from "./components/Footer";
import BackgroundGame from "./components/BackgroundGame";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Home from "./pages/Home";
import Impressum from "./pages/Impressum";
import AboutMe from "./pages/AboutMe";
import ProjectPageWrapper from "./pages/projects/ProjectPageWrapper";
import NotFound from "./pages/NotFound";

export default function App() {
  const theme = useTheme();
  const isBelowMd = useMediaQuery(theme.breakpoints.down("md"));

  const homeScrollPosition = useRef(0); // Store the scroll position of the home page

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        position: "relative",
        zIndex: 0,
        backgroundColor: "background.primary",
      }}
    >
      <Router>
        {!isBelowMd && <BackgroundGame />}
        <AppBar position="fixed" color="primary">
          <Toolbar
            sx={{
              flexDirection: { xs: "column", sm: "row" },
              alignItems: { xs: "center", sm: "center" },
              justifyContent: { xs: "center", sm: "space-between" },
            }}
          >
            <Typography
              color="brightText.primary"
              variant="h6"
              sx={{
                fontWeight: "bold",
                display: { xs: "none", sm: "block" },
                flexGrow: 1,
              }}
            >
              MATTHIAS MITSCHELE
            </Typography>

            <Box sx={{ display: "flex", gap: 2 }}>
              <Button color="inherit" component={Link} to="/">
                <Typography color="brightText.primary" fontWeight="bold">
                  Portfolio
                </Typography>
              </Button>

              <Button color="inherit" component={Link} to="/aboutme">
                <Typography color="brightText.primary" fontWeight="bold">
                  About Me
                </Typography>
              </Button>
            </Box>
          </Toolbar>
        </AppBar>

        <Toolbar />

        <Box sx={{ flex: 1 }}>
          <Routes>
            <Route
              path="/"
              element={<Home homeScrollPosition={homeScrollPosition} />}
            />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/projects/:id" element={<ProjectPageWrapper />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/projects/*" element={<NotFound />} />
          </Routes>
        </Box>

        <Box
          sx={{ py: 3, textAlign: "center", backgroundColor: "footer.main" }}
        >
          <Footer />
        </Box>
      </Router>
    </Box>
  );
}
