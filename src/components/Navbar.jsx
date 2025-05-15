import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Stack,
  Container,
} from "@mui/material";

const navItems = [
  { label: "Home", id: "#home" },
  { label: "Experience", id: "#experience" },
  { label: "Education", id: "#education" },
  { label: "Projects", id: "#projects" },
  { label: "Connect", id: "#connect" },
];

function Navbar() {
  return (
    <AppBar
      position="sticky"
      elevation={1}
      sx={{
        background: "#ffffff",
        color: "#1976d2",
        py: 1,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            minHeight: "80px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h5"
            component="div"
            sx={{ fontWeight: "bold", color: "#1976d2" }}
          >
            Joshua Bergeron
          </Typography>

          <Stack direction="row" spacing={3}>
            {navItems.map(({ label, id }) => (
              <Button
                key={label}
                href={id}
                sx={{
                  textTransform: "none",
                  color: "#1976d2",
                  fontSize: "1.2rem",
                  "&:hover": { color: "#808080" },
                }}
              >
                {label}
              </Button>
            ))}
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
