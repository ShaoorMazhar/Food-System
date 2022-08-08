import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import Btn from "../components/button";
import { signUp } from "../services/tableDataServices";
import { sign_up } from "../redux/actions/action";

export default function SignUp() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newUser = {
      userName: userName,
      email: email,
      password: password
    };
    const userData = await signUp(newUser);
    dispatch(sign_up(userData));
    console.log(userData, "ddd");
    if (userData?.metadata?.status === "SUCCESS") {
      toast("Sign Up Successfully!");
      setUserName(""), setEmail(""), setPassword("");
    } else {
      toast("Error! something went wrong");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs">
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
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                  required
                  fullWidth
                  value={userName}
                  id="userName"
                  label="User Name"
                  name="userName"
                  autoComplete="user-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Btn
              type="submit"
              onClick={handleSubmit}
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={userName === "" || email === "" || password === ""}
              text="Sign up"
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
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
