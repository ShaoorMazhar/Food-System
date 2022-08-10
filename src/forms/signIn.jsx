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
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { toast, ToastContainer } from "react-toastify";
import theme from "../theme";
import { useDispatch } from "react-redux";
import { signIn } from "../services/services";
import { sign_In } from "../redux/actions/action";

export default function SignIn({ handleChange }) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const newUser = {
      email: email,
      password: password
    };
    const userData = await signIn(newUser);
    const { token = "", user = {} } = userData;
    if (token) {
      dispatch(sign_In(user));
      localStorage.setItem("token", token);
      navigate("/home");
    } else {
      toast(`User Not Found`);
    }
    setEmail("");
    setPassword("");
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
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
            User Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Btn
              disabled={email === "" || password === ""}
              type="submit"
              variant="contained"
              text="Sign In"
              disableled={email === "" || password === ""}
            />

            <Grid container sx={{ justifyContent: "space-between" }} mt={2}>
              <Link href="/adminLogin" variant="body1">
                {"Sign in as Admin"}
              </Link>
              <Link href="#" variant="body1" onClick={() => handleChange("event", 1)}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Box>
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
        </Box>
      </Container>
    </ThemeProvider>
  );
}
