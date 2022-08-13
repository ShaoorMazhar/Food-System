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
import { useSelector } from "react-redux";
import { morningTeaStart } from "../constants/appConstants";
import { morningTeaEnd } from "../constants/appConstants";
import lunch from "../assets/image4.png";
import evening from "../assets/image3.png";
export default function Home() {
  function inTime(start, end) {
    var now = new Date();
    var time = now.getHours() * 60 + now.getMinutes();
    return time >= start && time < end;
  }
  const user = useSelector((state) => state?.order[0]);
  const lunchh = useSelector((state) => state?.lunchOrder[0]);
  const tea = useSelector((state) => state?.eveningOrder[0]);

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
                    disabled={inTime(morningTeaStart, morningTeaEnd)}
                    type="Morning-Tea"
                    data={
                      <TeaRequirements
                        text="Morning-Tea"
                        order={{
                          _id: user?._id,
                          sugarQuantity: user?.sugerQuantity,
                          teaVolume: user?.teaVolume
                        }}
                      />
                    }
                    background={morning}
                    src="https://img.freepik.com/premium-photo/coffee-break-minimal-white-blue-background-template-with-cup-coffee-copy-space_197174-9.jpg?w=2000"
                  />
                </Grid>
                <Grid item sm={3} xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                  <BasicModal
                    type="Lunch"
                    data={
                      <LunchRequirement
                        text="Lunch"
                        order={{
                          _id: lunchh?._id,
                          itemDescription: lunchh?.extras,
                          rotiQuantity: lunchh?.rotiQuantity,
                          amount: lunchh?.amount
                        }}
                      />
                    }
                    background={lunch}
                    src="https://t4.ftcdn.net/jpg/02/76/72/01/360_F_276720125_wVGmNFLvQNS1LCVdNxKNmmBUkJ26cVMO.jpg"
                  />
                </Grid>
                <Grid
                  item
                  sm={3}
                  xs={12}
                  sx={{ display: "flex", justifyContent: "center", marginLeft: "1%" }}>
                  <BasicModal
                    type="Evening-Tea"
                    data={
                      <TeaRequirements
                        text="Evening-Tea"
                        order={{
                          _id: tea?._id,
                          sugarQuantity: tea?.sugerQuantity,
                          teaVolume: tea?.teaVolume
                        }}
                      />
                    }
                    background={evening}
                    src="https://img.freepik.com/premium-photo/coffee-break-minimal-white-blue-background-template-with-cup-coffee-copy-space_197174-9.jpg?w=2000"
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
