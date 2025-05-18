import React from "react";
import {
  Box,
  Typography,
  Paper,
  Grid,
  Divider,
  Avatar,
  Fade,
} from "@mui/material";
import uciImage from "../assets/download.jpeg";

function Education() {
  return (
    <Box
      id="education"
      sx={{
        position: "relative",
        minHeight: "100vh",
        px: 3,
        py: 8,
        pt: { xs: 12, sm: 15, md: 15 }, // Add top padding here
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        background: "linear-gradient(135deg, #f0f4f8, #d9e2ec)",
      }}
    >
      {/* Content Layer */}
      <Box sx={{ zIndex: 1, width: "100%", maxWidth: 1000 }}>
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
            textAlign: "center",
            mb: 6,
          }}
        >
          Education
        </Typography>

        <Fade in timeout={800}>
          <Paper
            elevation={6}
            sx={{
              p: 4,
              borderRadius: 4,
              backgroundColor: "rgba(255, 255, 255, 0.92)",
              boxShadow: "0 12px 28px rgba(0,0,0,0.1)",
            }}
          >
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} sm={4} sx={{ textAlign: "center" }}>
                <Avatar
                  src={uciImage}
                  alt="UCI Logo"
                  variant="rounded"
                  sx={{
                    width: 120,
                    height: 120,
                    mx: "auto",
                    borderRadius: 2,
                    boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={8}>
                <Typography
                  variant="h6"
                  color="primary"
                  sx={{ fontWeight: 700 }}
                >
                  University of California, Irvine
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  Bachelor of Science – Computer Science
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Graduation: June 2024
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  GPA: 3.99
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Fade>

        <Divider sx={{ my: 6, borderColor: "rgba(0,0,0,0.1)" }} />

        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Relevant Coursework
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            Courses that helped me build a strong foundation in systems,
            engineering, and CS theory:
          </Typography>

          <Grid container spacing={2}>
            {[
              "Concurrency & Memory Management in OS",
              "Cryptography & Authentication",
              "Custom Memory Allocator (C/C++)",
              "Machine Learning Pipelines",
              "Agile Software Development",
              "Search & Ranking Algorithms",
              "Networking & Socket Programming",
            ].map((course, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Paper
                  elevation={2}
                  sx={{
                    p: 2,
                    backgroundColor: "#ffffffcc",
                    borderLeft: "4px solid #1976d2",
                    borderRadius: 2,
                    transition: "0.3s",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
                    },
                  }}
                >
                  <Typography variant="body2" color="text.primary">
                    {course}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default Education;
