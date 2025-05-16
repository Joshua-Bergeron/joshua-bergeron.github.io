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

const projects = [
  {
    title: "GarageBook",
    tech: [
      "React",
      "Next.js",
      "Neon",
      "Material-UI",
      "Node.js",
      "Prisma",
      "Storybook",
      "Vercel",
      "Jest",
      "NextAuth",
    ],
    bullets: [
      "Developed a full-stack vehicle maintenance tracker using Next.js and React for a seamless user experience.",
      "Built and styled a responsive UI with Material-UI and Storybook for reusable, well-documented components.",
      "Implemented backend services with Node.js and Prisma ORM, connecting to Neon serverless PostgreSQL database.",
      "Added route protection and user authentication using NextAuth to secure sensitive user data and pages.",
      "Created custom API routes in Next.js to efficiently fetch and manipulate vehicle and maintenance data.",
      "Wrote comprehensive unit tests to ensure code quality and reliability across frontend and backend components.",
      "Deployed the app on Vercel, ensuring fast performance and continuous deployment pipelines.",
    ],
    github: "https://github.com/Joshua-Bergeron/garagebook",
    demo: "https://garagebook.vercel.app/",
  },
  {
    title: "Search Engine",
    tech: ["Python", "Beautiful Soup", "lxml", "NLTK"],
    bullets: [
      "Built a search engine from the ground up capable of querying information from 50,000+ subdomains.",
      "Designed an indexer to perform text extraction, stemming, lemmatization, and tokenization.",
      "Optimized query time to retrieve and rank matching documents within 1ms using TF-IDF scores.",
    ],
  },
  {
    title: "Health Tracking & Recommendation App",
    tech: ["Swift", "Firebase", "Apple HealthKit"],
    bullets: [
      "Developed an iOS app that collects users’ health data and recommends healthy habits.",
      "Employed Firebase for user registration and authentication.",
      "Utilized Apple HealthKit to make intelligent, personalized recommendations.",
    ],
  },
  {
    title: "AI Checker Agent",
    tech: ["Python"],
    bullets: [
      "Created an AI agent to play checkers using the Monte Carlo Tree Search algorithm.",
      "Simulated thousands of games to evaluate and select the best move.",
    ],
  },
  {
    title: "Portfolio Website",
    tech: [
      "MongoDB",
      "Express",
      "React",
      "Node",
      "CSS",
      "HTML",
      "JavaScript",
      "Heroku",
    ],
    bullets: [
      "Designed and implemented a full stack web portfolio.",
      "Configured and hosted the application on Heroku.",
    ],
  },
];

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
        Projects
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
