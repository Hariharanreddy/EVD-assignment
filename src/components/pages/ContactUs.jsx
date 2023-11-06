import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate();

  const handlePhoneChange = (event) => {
    const newValue = event.target.value.replace(/\D/g, "").slice(0, 10);
    setPhone(newValue);
  };

  const isEmailValid = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !isEmailValid(email) || !phone || !address) {
      alert("Please fill in all required fields and enter a valid email.");
      return;
    } else {
      localStorage.setItem(
        "user",
        JSON.stringify({
          name,
          email,
          phone,
          address,
        })
      );

      
      navigate("/");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4">Contact Us</Typography>
      <Paper elevation={3} style={{ padding: "20px", maxWidth: "30%" }}>
        <form onSubmit={handleSubmit}>
          <Box display="flex" flexDirection="column">
            <TextField required label="Name" fullWidth value={name} onChange={(e) => setName(e.target.value)} margin="normal" />
            <TextField required label="Email" type="email" fullWidth value={email} onChange={(e) => setEmail(e.target.value)} margin="normal" />
            <TextField required label="Phone" fullWidth value={phone} onChange={handlePhoneChange} margin="normal" />
            <TextField required label="Address" fullWidth value={address} onChange={(e) => setAddress(e.target.value)} margin="normal" />
            <Button variant="contained" color="primary" type="submit" style={{ marginTop: "20px" }}>
              Submit
            </Button>
          </Box>
        </form>
      </Paper>
    </div>
  );
};

export default ContactUs;
