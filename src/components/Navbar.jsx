import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Stack,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const navItems = [
  { label: "Home", id: "#home" },
  { label: "Experience", id: "#experience" },
  { label: "Education", id: "#education" },
  { label: "Projects", id: "#projects" },
  { label: "Connect", id: "#connect" },
];

function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const drawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {navItems.map(({ label, id }) => (
          <ListItem key={label} disablePadding>
            <ListItemButton component="a" href={id}>
              <ListItemText primary={label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

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

          {isMobile ? (
            <>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>

              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
              >
                {drawerList}
              </Drawer>
            </>
          ) : (
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
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
