import React from "react";
import { Grid } from "@mui/material";
import Btn from "../components/button";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
export default function ButtonGroup({ handleSubmit, disabled }) {
  return (
    <Grid container sx={{ justifyContent: "space-around", marginTop: "25px" }}>
      <Grid item xs={12} lg={5}></Grid>
      <Grid item xs={12} md={3} lg={2}>
        <Btn
          color="error"
          text="Delete"
          onClick={handleSubmit}
          variant="contained"
          endIcon={<DeleteIcon />}
        />
      </Grid>
      <Grid item xs={12} md={3} lg={2}>
        <Btn text="Edit" onClick={handleSubmit} variant="contained" endIcon={<EditIcon />} />
      </Grid>
      <Grid item xs={12} md={3} lg={2}>
        <Btn
          disabled={disabled}
          text="Order"
          onClick={handleSubmit}
          variant="contained"
          endIcon={<CheckIcon />}
        />
      </Grid>
    </Grid>
  );
}
