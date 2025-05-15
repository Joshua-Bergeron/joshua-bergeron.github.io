import React from "react";
import { Box, Typography, Paper, Stack, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

const socials = [
  {
    name: "LinkedIn",
    icon: <LinkedInIcon fontSize="large" />,
    url: "https://www.linkedin.com/in/your-linkedin-handle/",
  },
  {
    name: "Email",
    icon: <EmailIcon fontSize="large" />,
    url: "mailto:your-email@example.com",
  },
  {
    name: "GitHub",
    icon: <GitHubIcon fontSize="large" />,
    url: "https://github.com/your-github-handle",
  },
];

export default function Connect() {
  return (
    <Box
      id="connect"
      sx={{
        minHeight: "100vh",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 3, sm: 6, md: 12 },
        py: 10,
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#e8f0fe",
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
        Let's Connect!
      </Typography>

      <Typography
        variant="body1"
        color="primary.dark"
        sx={{ maxWidth: 600, textAlign: "center", mb: 6 }}
      >
        Feel free to reach out to me through any of the platforms below. I’m
        always happy to chat or collaborate!
      </Typography>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={6}
        justifyContent="center"
        alignItems="center"
        sx={{ width: "100%", maxWidth: 520 }}
      >
        {socials.map(({ name, icon, url }) => (
          <Paper
            key={name}
            elevation={1}
            component="a"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              flex: 1,
              p: 3,
              borderRadius: 3,
              textAlign: "center",
              color: "primary.main",
              textDecoration: "none",
              backgroundColor: "white",
              boxShadow:
                "0 1px 4px rgba(25, 118, 210, 0.12), 0 1px 3px rgba(25, 118, 210, 0.14)",
              transition: "transform 0.25s ease, box-shadow 0.25s ease",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow:
                  "0 6px 12px rgba(25, 118, 210, 0.24), 0 3px 6px rgba(25, 118, 210, 0.22)",
              },
            }}
          >
            <IconButton
              aria-label={name}
              sx={{
                color: "primary.main",
                mb: 1,
                width: 64,
                height: 64,
                bgcolor: "rgba(25, 118, 210, 0.1)",
                "&:hover": {
                  bgcolor: "rgba(25, 118, 210, 0.2)",
                },
              }}
            >
              {icon}
            </IconButton>
            <Typography
              variant="h6"
              sx={{ fontWeight: "600" }}
              color="primary.main"
            >
              {name}
            </Typography>
          </Paper>
        ))}
      </Stack>
    </Box>
  );
}
