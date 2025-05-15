import React from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Connect from "./pages/Connect";
import "./App.css";

const lightTheme = createTheme({
  palette: {
    primary: { main: "#1976d2" }, // Blue
    secondary: { main: "#ff4081" }, // Pink
    background: { default: "#f5f5f5", paper: "#ffffff" }, // Light background
    text: { primary: "#212121", secondary: "#757575" }, // Dark text
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
});

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Navbar />
      <main>
        <section id="home" style={{ scrollMarginTop: "80px" }}>
          <Home />
        </section>
        <section id="experience" style={{ minHeight: "100vh" }}>
          <Experience />
        </section>
        <section id="education" style={{ minHeight: "100vh" }}>
          <Education />
        </section>
        <section
          id="projects"
          style={{
            minHeight: "100vh",
            scrollMarginTop: "80px", // matches sticky navbar height
          }}
        >
          <Projects />
        </section>
        <section id="connect" style={{ minHeight: "100vh" }}>
          <Connect />
        </section>
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
