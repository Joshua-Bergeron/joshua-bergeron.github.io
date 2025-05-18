import React from "react";
import {
  Box,
  Typography,
  Paper,
  Chip,
  useTheme,
  Grid,
  Button,
  Stack,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import { projects } from "../content/ProjectsContent";

export default function Projects() {
  const theme = useTheme();

  return (
    <Box
      id="projects"
      sx={{
        minHeight: "100vh",
        py: 8,
        px: { xs: 2, sm: 6, md: 12 },
        bgcolor: theme.palette.background.default,
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
        Personal Projects
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {projects.map(({ title, tech, bullets, github, demo }, idx) => (
          <Grid key={idx} item xs={12} sm={10} md={6}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                borderRadius: 3,
                transition: "transform 0.3s ease",
                cursor: "default",
                bgcolor: theme.palette.background.paper,
                boxShadow: theme.shadows[5],
                "&:hover": { transform: "scale(1.03)" },
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant="h5" fontWeight="700" mb={1}>
                {title}
              </Typography>

              <Box mb={2} sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {tech.map((t, i) => (
                  <Chip
                    key={i}
                    label={t}
                    size="small"
                    color="primary"
                    variant="outlined"
                  />
                ))}
              </Box>

              <Box
                component="ul"
                sx={{
                  p: 0,
                  m: 0,
                  listStyleType: "disc",
                  pl: 2,
                  flexGrow: 1,
                  overflowY: "auto",
                }}
              >
                {bullets.map((bullet, i) => (
                  <li key={i} style={{ marginBottom: "0.5rem" }}>
                    <Typography variant="body2" color="text.secondary">
                      {bullet}
                    </Typography>
                  </li>
                ))}
              </Box>

              <Stack direction="row" spacing={2} mt={2}>
                {github && (
                  <Button
                    variant="outlined"
                    color="primary"
                    startIcon={<GitHubIcon />}
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ textTransform: "none" }}
                  >
                    View on GitHub
                  </Button>
                )}
                {demo && (
                  <Button
                    variant="outlined"
                    color="secondary"
                    startIcon={<LaunchIcon />}
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ textTransform: "none" }}
                  >
                    View Demo
                  </Button>
                )}
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
