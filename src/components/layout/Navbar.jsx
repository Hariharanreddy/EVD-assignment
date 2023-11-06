import { Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

const textStyle = {
  color: "white",
  textDecoration: "none",
  cursor: "pointer",
};

function ResponsiveAppBar() {
  const navigate = useNavigate();
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box style={{ display: "flex", gap: "20px" }}>
            <Typography
              onClick={() => {
                navigate("/");
              }}
              style={textStyle}
            >
              Home
            </Typography>
            <Typography
              onClick={() => {
                navigate("/about");
              }}
              style={textStyle}
            >
              About us
            </Typography>
            <Typography
              onClick={() => {
                navigate("/contact");
              }}
              style={textStyle}
            >
              Contact us
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
