import React, { useEffect, useState } from "react";
import { Typography, Paper, Container } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      const userName = userData.name;
      setName(userName);
      toast.success("Form submitted", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  }, []);

  return (
    <Container maxWidth="sm" style={{ marginTop: "40px" }}>
      <Paper elevation={3} style={{ padding: "20px" }}>
        {name ? <Typography variant="h3">Name : {name}</Typography> : null}
        <Typography variant="h6">
          EVD Technology dedicates itself to crafting unparalleled digital and mobile application solutions, optimizing business processes, and adding significant value to both local and international
          enterprises. Our team of highly skilled IT professionals works tirelessly, providing round-the-clock development services, deployment support, and 24*7 assistance to ensure EVD Technology
          remains steadfast in delivering on its commitments and offerings. Experience the power of customized web development, cutting-edge Android and iOS app development, and effective digital
          marketing services driven by the adoption of new technologies.​
        </Typography>
      </Paper>
      <ToastContainer />
    </Container>
  );
};

export default Home;
