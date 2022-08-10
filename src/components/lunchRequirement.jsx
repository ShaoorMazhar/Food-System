import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import ButtonGroup from "./buttonGroup";
import { useSelector } from "react-redux";
export default function LunchRequirement() {
  const [userName, setUserName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [roti, setRoti] = useState("");
  const [amount, setAmount] = useState("");
  const user = useSelector((state) => {
    console.log(state, "sss");
    const name = state?.signIn?.signIn[0];
    return name ? name : "";
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    setUserName("");
    setItemDescription("");
    setRoti("");
    setAmount("");
  };
  return (
    <Box
      component="form"
      sx={{ width: "100%" }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}>
      <Typography id="modal-modal-title" variant="h5">
        Add lunch Details
      </Typography>
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
          setAmount(e.target.value);
        }}
        type="number"
        id="amount"
        label="Amount Paid"
        variant="outlined"
        value={amount}
        sx={{ marginTop: "20px", width: "100%" }}
      />
      <TextField
        onChange={(e) => {
          setRoti(e.target.value);
        }}
        type="number"
        id="roti"
        label="Roti"
        variant="outlined"
        value={roti}
        sx={{ marginTop: "20px", width: "100%" }}
      />
      <TextField
        onChange={(e) => {
          setItemDescription(e.target.value);
        }}
        id="item_decsription"
        label="Items(Description)"
        variant="outlined"
        value={itemDescription}
        sx={{ marginTop: "20px", width: "100%" }}
      />

      <ButtonGroup
        disabled={userName === "" || itemDescription === "" || amount === "" || roti === ""}
        onClick={handleSubmit}
      />
    </Box>
  );
}
