import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Btn from "../components/button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import { ToastContainer, toast } from "react-toastify";
export default function AdminLogin() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === "faisal@luminogics.com" && password === "faisal22") {
      localStorage.setItem("email", "faisal@luminogics.com");
      toast("Login Successfull!");
      navigate("/adminPortal");
    } else if (email !== "faisal@luminogics.com") {
      toast("Wrong Email Address");
    } else if (password !== "faisal22") {
      toast("Wrong password!");
    } else {
      toast("Wrong Email and password!");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        sx={{
          height: "100vh",
          dispaly: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "secondary.main"
        }}>
        <Grid item xs={10} sm={8} md={4}>
          <Paper elevation={20}>
            <Container component="main" maxWidth="xs" sx={{ padding: "30px" }}>
              <CssBaseline />
              <Box
                sx={{
                  marginTop: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                }}>
                <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Admin Sign in
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                  <Btn
                    type="submit"
                    variant="contained"
                    text="Sign In"
                    disabled={email === "" || password === ""}
                  />
                  <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                  />
                  <Grid container>
                    <Grid container justifyContent="flex-end">
                      <Link href="/" variant="body1" mt={2}>
                        {"Sigin as User"}
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Container>
          </Paper>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
