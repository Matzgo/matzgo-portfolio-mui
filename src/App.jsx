import * as React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import ProTip from "./ProTip"; // Assuming ProTip is another component
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import MUILink from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme";
import Footer from "./components/Footer";
import Impressum from "./pages/Impressum";
import BackgroundGame from "./components/BackgroundGame";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import PSiegebound from "./pages/projects/PSiegebound"; // Import your project page
import PCodeVanguard from "./pages/projects/PCodeVanguard";
import AboutMe from "./pages/AboutMe";

export default function App() {
  const theme = useTheme(); // Access the Material-UI theme
  const isBelowMd = useMediaQuery(theme.breakpoints.down("md")); // Check if the screen width is below "md"

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          position: "relative", // Ensure proper stacking context
          zIndex: 0,
          backgroundColor: "background.primary", // Apply background color to the full page
        }}
      >
        {/* Background Game */}
        {!isBelowMd && <BackgroundGame />} {/* Only render when below "md" */}
        <Router>
          {/* AppBar component that is fixed at the top */}
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
                  display: { xs: "none", sm: "block" }, // Hidden on mobile
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

                <Button color="inherit" component={Link} to="/contact">
                  <Typography color="brightText.primary" fontWeight="bold">
                    Contact
                  </Typography>
                </Button>
              </Box>
            </Toolbar>
          </AppBar>

          {/* Offset for the fixed AppBar */}
          <Toolbar />

          {/* Main content */}
          <Box sx={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/impressum" element={<Impressum />} />
              <Route path="/aboutme" element={<AboutMe />} />
              <Route path="/siegebound" element={<PSiegebound />} />
              <Route path="/codevanguard" element={<PCodeVanguard />} />
            </Routes>
          </Box>

          {/* Footer content */}
          <Box
            sx={{ py: 3, textAlign: "center", backgroundColor: "footer.main" }}
          >
            <Footer></Footer>
          </Box>
        </Router>
      </Box>
    </ThemeProvider>
  );
}
