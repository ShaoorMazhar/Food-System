import React from "react";
import Grid from "@mui/material/Grid";
import DenseAppBar from "../components/denseAppBar";
import BasicModal from "../modals/basicModal";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import morning from "../assets/morningTeaBtn.png";
// import LunchRequirement from "../components/lunchRequirement";
// import TeaRequirements from "../components/teaRequirements";
import TeaData from "../components/teaData";
import background from "../assets/image33.PNG";
import waiter from "../assets/group1.png";
import lunch from "../assets/lunchBtn.png";
import evening from "../assets/eveningTeaBtn.png";
import LunchData from "../components/lunchData";
export default function AdminPortal() {
  // const newTime = new Date().toLocaleTimeString();
  // const [cTime, setCTime] = useState(newTime);

  return (
    <div>
      <DenseAppBar />
      <ThemeProvider theme={theme}>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "90vh",
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}>
          <Grid container item xs={10}>
            <Grid
              container
              item
              xs={12}
              md={8}
              sx={{
                display: "flex",
                justifyContent: "space-between"
              }}>
              <Grid item xs={3}></Grid>
              <Grid
                className="overlay"
                item
                sm={9}
                xs={12}
                sx={{
                  textAlign: "center"
                }}>
                <Typography variant="h3">Hello!!</Typography>
                <Typography variant="h4">Bring people together with great food...</Typography>
              </Grid>
              <Grid
                container
                item
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "space-between"
                }}>
                <Grid item md={2} xs={12}></Grid>
                <Grid
                  item
                  sm={3}
                  xs={12}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginRight: "1%"
                  }}>
                  <BasicModal
                    data={<TeaData heading="Morning Tea" />}
                    background={morning}
                    // disabled={newTime < "11:00:00 am" || newTime > "12:00:00 pm"}
                  />
                </Grid>
                <Grid item sm={3} xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                  <BasicModal
                    data={<LunchData />}
                    background={lunch}
                    // disabled={newTime < "12:00:00 PM" || newTime > "03:00:00 PM"}
                  />
                </Grid>
                <Grid
                  item
                  sm={3}
                  xs={12}
                  sx={{ display: "flex", justifyContent: "center", marginLeft: "1%" }}>
                  <BasicModal
                    data={<TeaData heading="Evening Tea" />}
                    background={evening}
                    // disabled={newTime < "03:00:00 PM" && newTime > "05:00:00 PM"}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={4} className="waiter">
              <img src={waiter} alt="home" width="100%" height="110%" />
            </Grid>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}
