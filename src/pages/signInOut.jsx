import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import SignIn from "../forms/signIn";
import SignUp from "../forms/signUp";
import { Grid } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ pb: 5 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
export default function SignInOut() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
            <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
              <Tab label="Sign In" />
              <Tab label="Sign Up" />
            </Tabs>
            <TabPanel value={value} index={0}>
              <SignIn handleChange={handleChange} />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <SignUp />
            </TabPanel>
          </Paper>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
