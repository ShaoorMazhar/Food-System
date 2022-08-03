import React from "react";
import Grid from "@mui/material/Grid";
import DenseAppBar from "../components/denseAppBar";
import MorningTeaModal from "../modals/morningTeaModal";
import EveningTeaModal from "../modals/eveningTeaModal";
// import Lunch from "../modals/lunch";
import background from "../assets/image44.PNG";
export default function Home() {
  return (
    <div>
      <DenseAppBar />
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
            item
            xs={12}
            md={7}
            sx={{
              display: "flex",
              // border: "5px solid black",
              justifyContent: "center",

              alignItems: "flex-end"
              // flexDirection: "column"
            }}>
            <Grid item xs={4} sx={{ display: "flex", justifyContent: "center" }}>
              <MorningTeaModal />
            </Grid>
            <Grid item xs={4} sx={{ display: "flex", justifyContent: "center" }}>
              {/* <Lunch /> */}
            </Grid>
            <Grid item xs={4} sx={{ display: "flex", justifyContent: "center" }}>
              <EveningTeaModal />
            </Grid>
          </Grid>
          <Grid item xs={12} md={5}>
            <img
              src="https://img.freepik.com/premium-photo/waiter-takes-order-with-notebook-pencil-3d-illustration-cartoon-style_578102-3829.jpg"
              alt="home"
              width="100%"
              height="100%"
              sx={{ overflow: "hidden", height: "100%" }}
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
