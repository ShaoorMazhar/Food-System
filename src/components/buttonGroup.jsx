import React from "react";
import EditButton from "../components/editButton";
import DeleteButton from "../components/deleteButton";
import { Grid } from "@mui/material";
import Btn from "../components/button";
export default function ButtonGroup(props) {
  return (
    <Grid container sx={{ justifyContent: "space-around", marginTop: "25px" }}>
      <Grid item xs={12} lg={5}></Grid>
      <Grid item xs={12} md={3} lg={2}>
        <DeleteButton />
      </Grid>
      <Grid item xs={12} md={3} lg={2}>
        <EditButton />
      </Grid>
      <Grid item xs={12} md={3} lg={2}>
        <Btn disabled={props.disabled} text="Order" onClick={props.handleSubmit} />
      </Grid>
    </Grid>
  );
}
