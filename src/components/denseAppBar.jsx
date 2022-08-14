import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import { useNavigate } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";

export default function DenseAppBar() {
  const navigate = useNavigate();

  function logOut() {
    localStorage.clear();
    navigate("/");
  }
  return (
    <ThemeProvider theme={theme}>
      <>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" className="appbar">
            <Toolbar
              style={{ paddingLeft: "6%", display: "flex", justifyContent: "space-between" }}>
              <Grid item sx={{ display: "flex", alignItems: "center" }}>
                <img
                  src="https://luminogics.com/wp-content/uploads/2021/11/Luminogics_original_notext.png"
                  alt="luminogics_logo"
                  width="55px"
                />
                <Typography
                  component="div"
                  sx={{
                    color: "white",
                    fontSize: "1.6rem",
                    fontWeight: 600,
                    marginLeft: "2%"
                  }}>
                  Luminogics
                </Typography>
              </Grid>
              <Grid item x={{ display: "flex", alignItems: "center" }}>
                <Tooltip title="Logout Data" placement="bottom" backgroundcolor="white" arrow>
                  <Button
                    sx={{
                      color: "white",
                      fontSize: "1.2rem",
                      fontWeight: "bolder",
                      marginLeft: "10px"
                    }}
                    onClick={logOut}>
                    <LogoutIcon />
                  </Button>
                </Tooltip>
              </Grid>
            </Toolbar>
          </AppBar>
        </Box>
      </>
    </ThemeProvider>
  );
}
