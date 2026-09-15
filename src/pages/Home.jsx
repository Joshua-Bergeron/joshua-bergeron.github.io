import React from "react";
import { Box, Grid, Typography, Avatar, Button, Paper } from "@mui/material";
import profileImage from "../assets/ProfilePic.jpeg";
import background from "../assets/background1.jpg";

function Home() {
  return (
    <Box
      id="home"
      sx={{
        position: "relative",
        minHeight: "calc(100vh - 80px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 3,
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.8,
          zIndex: 0,
        }}
      />

      <Grid
        container
        spacing={6}
        alignItems="center"
        justifyContent="center"
        sx={{ maxWidth: 1300, mx: "auto", zIndex: 1 }}
      >
        <Grid
          item
          xs={12}
          md={5}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Avatar
            alt="Joshua Bergeron"
            src={profileImage}
            sx={{
              width: { xs: 200, sm: 260, md: 320 },
              height: { xs: 200, sm: 260, md: 320 },
              boxShadow: "0 6px 18px rgba(0, 0, 0, 0.15)",
              borderRadius: "16px",
            }}
          />
        </Grid>

        <Grid
          item
          xs={12}
          md={7}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Paper
            elevation={3}
            sx={{
              p: { xs: 4, sm: 6 },
              borderRadius: 3,
              textAlign: "center",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.06)",
              width: "100%",
              maxWidth: 600,
              backgroundColor: "rgba(255, 255, 255, 0.9)",
            }}
          >
            <Typography
              variant="h3"
              gutterBottom
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "2rem", sm: "2.4rem", md: "2.8rem" },
                mb: 3,
              }}
            >
              Hi, I'm Joshua Bergeron
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                fontSize: { xs: "1rem", sm: "1.15rem" },
                lineHeight: 1.8,
                mb: 4,
              }}
            >
              Full-stack Software Engineer building production applications with
              React, TypeScript, C#, ASP.NET Core, GraphQL, and SQL. Experience
              developing frontend and backend features, optimizing application
              performance, and collaborating across multiple engineering teams.
              Graduated from UC Irvine with a B.S. in Computer Science in three
              years with a 3.99 GPA, Magna Cum Laude.
            </Typography>

            <a href="#connect" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{
                  px: { xs: 5, sm: 7 },
                  py: 1.75,
                  fontSize: "1rem",
                  borderRadius: 3,
                  textTransform: "none",
                }}
              >
                Contact Me
              </Button>
            </a>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
