import React from "react";
import { Box, Typography, Paper, Grid } from "@mui/material";

function Experience() {
  const events = [
    {
      year: "June 2023 - Present",
      title: "Associate Software Engineer in Test",
      company: "Company Name",
      logo: "https://logo.clearbit.com/https://www.ashcompanies.com/",
      description: [
        "Formulate comprehensive UI tests in Playwright to assess the functionality of components and sites.",
        "Write and manage automated Postman API tests to ensure the robustness of company software.",
        "Construct and develop automated CI/CD test pipelines with Azure DevOps.",
        "Expose and identify bugs in development, testing, staging, and production environments.",
        "Write JMeter test plans to load-test company applications and sites under heavy customer use.",
      ],
    },
    {
      year: "June 2022 - August 2022",
      title: "IT Intern",
      company: "Kros-Wise Consulting",
      logo: "https://logo.clearbit.com/kros-wise.com",
      description: [
        "Assisted employees with IT-related issues such as troubleshooting and upgrading user hardware.",
        "Wrote comprehensive documentation for IT policies and procedures such as user account creation and software installations.",
      ],
    },
    {
      year: "November 2019 - June 2023",
      title: "Lead Math Instructor",
      company: "Mathnasium",
      logo: "https://logo.clearbit.com/mathnasium.com",
      description: [
        "Instructed K-12 students in various levels of math (through calculus).",
        "Trained new tutors, managed students’ curriculums, and maintained an organized learning environment.",
      ],
    },
  ];

  return (
    <Box
      id="experience"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 3,
        py: 8,
        background: "linear-gradient(135deg, #f0f4f8, #d9e2ec)",
      }}
    >
      <Grid
        container
        direction="column"
        spacing={4}
        sx={{ maxWidth: 1200, mx: "auto" }}
      >
        <Box
          sx={{
            position: "relative",
            top: "-80px",
            height: "10px",
          }}
        />
        <Grid item>
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
            Professional Experience
          </Typography>
        </Grid>

        <Grid item>
          <Grid container spacing={4} justifyContent="center">
            {events.map((event, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper
                  elevation={3}
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    p: 3,
                    borderRadius: 3,
                    textAlign: "left",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
                  }}
                >
                  <Box>
                    <Typography
                      variant="subtitle2"
                      color="primary"
                      sx={{ fontWeight: "bold", mb: 1 }}
                    >
                      {event.year}
                    </Typography>

                    <Box display="flex" alignItems="center" mb={2}>
                      <Box
                        component="img"
                        src={event.logo}
                        alt={`${event.company} logo`}
                        sx={{
                          width: 40,
                          height: 40,
                          objectFit: "contain",
                          borderRadius: "8px",
                          mr: 2,
                          backgroundColor: "#fff",
                        }}
                      />
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                          {event.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {event.company}
                        </Typography>
                      </Box>
                    </Box>

                    <ul style={{ paddingLeft: "1.2rem", margin: 0 }}>
                      {event.description.map((item, i) => (
                        <li key={i} style={{ marginBottom: "0.5rem" }}>
                          <Typography variant="body2" color="text.secondary">
                            {item}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Experience;
