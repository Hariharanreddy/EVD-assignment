import React, { useState } from "react";
import { TextField, Button, Typography, Paper, Box, Container } from "@mui/material";

const AboutUs = () => {
  return (
    <Container maxWidth="sm" style={{ marginTop: "40px" }}>
      <Paper elevation={3} style={{ padding: "20px" }}>
        <Typography variant="h3" style={{ marginBottom: "20px" }}>
          About Us
        </Typography>
        <Typography variant="h6">
          EVD Technology dedicates itself to crafting unparalleled digital and mobile application solutions, optimizing business processes, and adding significant value to both local and international
          enterprises. Our team of highly skilled IT professionals works tirelessly, providing round-the-clock development services, deployment support, and 24*7 assistance to ensure EVD Technology
          remains steadfast in delivering on its commitments and offerings.
        </Typography>
      </Paper>
    </Container>
  );
};

export default AboutUs;
