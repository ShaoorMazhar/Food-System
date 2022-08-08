import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ButtonGroup from "./buttonGroup";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import RadioButtonsGroup from "../components/radioButtonGroup";
import TextField from "@mui/material/TextField";
import { useSelector } from "react-redux";
export default function TeaRequirements() {
  const [userName, setUserName] = useState("");
  const [sugarQuantity, setSugarQuantity] = useState("");
  const [teaVolume, setTeaVolume] = useState("half cup");
  const user = useSelector((state) => {
    console.log(state, "state");
    return state?.signIn?.signIn[0]?.payload?.data?.user?.userName;
  });
  console.log(user, "user123");
  const handleSubmit = (e) => {
    e.preventDefault();
    setUserName("");
    setSugarQuantity("");
    setTeaVolume("half cup");
  };
  return (
    <Box
      component="form"
      sx={{ width: "100%" }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}>
      <Typography id="modal-modal-title" variant="h5">
        Add Tea Details
      </Typography>
      <Grid item xs={12} md={8}>
        <Divider />
        <TextField
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          id="Username"
          label="User Name"
          variant="outlined"
          value={user}
          sx={{ marginTop: "20px", width: "100%" }}
        />
        <TextField
          onChange={(e) => {
            setSugarQuantity(e.target.value);
          }}
          type="number"
          id="suger_quantity"
          label="Sugar Quantity(spoon)"
          variant="outlined"
          value={sugarQuantity}
          sx={{ marginTop: "20px", width: "100%" }}
        />
        <RadioButtonsGroup tea_volume={teaVolume} setTea_volume={setTeaVolume} />
        <ButtonGroup
          onClick={handleSubmit}
          disabled={userName === "" || sugarQuantity === "" || teaVolume === ""}
        />
      </Grid>
    </Box>
  );
}
