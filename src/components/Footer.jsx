import React from "react";
import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        p: 2,
        background: "linear-gradient(135deg, #f0f4f8, #d9e2ec)",
        color: "#757575",
        textAlign: "center",
      }}
    >
      <Typography variant="body2">
        © 2025 Joshua Bergeron. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
