import React from "react";
import Grid from "@mui/material/Grid";
import DenseAppBar from "../components/denseAppBar";
import BasicModal from "../modals/basicModal";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import morning from "../assets/image2.png";
import LunchRequirement from "../components/lunchRequirement";
import TeaRequirements from "../components/teaRequirements";
import background from "../assets/image33.PNG";
import waiter from "../assets/image66.png";
import lunch from "../assets/image4.png";
import evening from "../assets/image3.png";
export default function Home() {
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
            height: "79.5vh",
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
                <Typography variant="h4">
                  Save Yours and mine time by placing your order before time...
                </Typography>
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
                    data={<TeaRequirements />}
                    background={morning}
                    src="https://img.freepik.com/premium-photo/coffee-break-minimal-white-blue-background-template-with-cup-coffee-copy-space_197174-9.jpg?w=2000"
                  />
                </Grid>
                <Grid item sm={3} xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                  <BasicModal
                    data={<LunchRequirement />}
                    background={lunch}
                    src="https://picjumbo.com/wp-content/uploads/healthy-taco-with-place-for-text-free-photo-1080x720.jpg"
                  />
                </Grid>
                <Grid item sm={3} xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                  <BasicModal
                    data={<TeaRequirements />}
                    background={evening}
                    src="https://static.vecteezy.com/system/resources/previews/003/125/420/large_2x/electronic-pen-smartphone-book-coffee-mug-on-blue-background-free-photo.jpg"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={4} className="waiter">
              <img src={waiter} alt="home" width="80%" height="100%" />
            </Grid>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}
