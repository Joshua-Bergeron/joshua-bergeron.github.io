import React from "react";
import { Box, Typography, Paper, Grid, Divider } from "@mui/material";
import uciImage from "../assets/download.jpeg";

function Education() {
  return (
    <Box
      id="education"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 3,
        py: 8,
        background: "linear-gradient(135deg, #f0f4f8, #d9e2ec)",
      }}
    >
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
          textAlign: "center",
          mb: 4,
        }}
      >
        Education
      </Typography>

      <Grid container justifyContent="center" spacing={4}>
        <Grid item xs={12} sm={8} md={6}>
          <Paper
            elevation={6}
            sx={{
              padding: 4,
              borderRadius: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#ffffffd1",
            }}
          >
            <Box
              component="img"
              src={uciImage}
              alt="University of California, Irvine Logo"
              sx={{
                width: "100px",
                height: "auto",
                objectFit: "contain",
                borderRadius: "8px",
              }}
            />

            <Box sx={{ ml: 3, textAlign: "left", width: "100%" }}>
              <Typography
                variant="subtitle2"
                color="primary"
                sx={{ fontWeight: "bold", mb: 2 }}
              >
                University of California, Irvine
              </Typography>

              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                Bachelor of Science – Computer Science
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                June 2024
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                GPA: 3.99
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      <Divider
        sx={{ my: 4, width: "60%", borderColor: "rgba(0, 0, 0, 0.1)" }}
      />

      <Box sx={{ maxWidth: 800, textAlign: "center", mt: 4 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
          Relevant Coursework
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          Some of the most exciting projects and courses I have worked on during
          my studies include:
        </Typography>
        <ul
          style={{
            listStyleType: "disc",
            paddingLeft: "1.5rem",
            textAlign: "left",
            margin: "0",
          }}
        >
          <li>
            <Typography variant="body2" color="text.secondary">
              Data Structures and Algorithms: Implemented advanced algorithms in
              real-world scenarios.
            </Typography>
          </li>
          <li>
            <Typography variant="body2" color="text.secondary">
              Machine Learning: Developed a predictive model using Python and
              TensorFlow.
            </Typography>
          </li>
          <li>
            <Typography variant="body2" color="text.secondary">
              Web Development: Built full-stack applications using React,
              Node.js, and MongoDB.
            </Typography>
          </li>
        </ul>
      </Box>
    </Box>
  );
}

export default Education;
