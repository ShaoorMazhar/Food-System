import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import Btn from "../components/button";
import EditButton from "../components/editButton";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
import DeleteButton from "../components/deleteButton";
import { Grid } from "@mui/material";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4
};

export default function Lunch() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [UserName, setUserName] = useState("");
  const [item_description, setItem_description] = useState("");
  const [roti, setRoti] = useState("");
  const [amount, setAmount] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(UserName, roti, amount, item_description);
    setUserName("");
    setItem_description("");
    setRoti("");
    setAmount("");
  };
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Button
          sx={{
            backgroundColor: "primary.main",
            color: "#fafafa",
            width: "9rem",
            height: "9rem",
            borderRadius: "50%",
            marginRight: ".5rem"
          }}
          endIcon={<RamenDiningIcon />}
          onClick={handleOpen}>
          Lunch
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description">
          <Box
            sx={{
              ...style,
              width: "50vw",
              backgroundImage: `url("https://picjumbo.com/wp-content/uploads/healthy-taco-with-place-for-text-free-photo-1080x720.jpg")`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat"
            }}>
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
                value={UserName}
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
                  setItem_description(e.target.value);
                }}
                id="item_decsription"
                label="Items(Description)"
                variant="outlined"
                value={item_description}
                sx={{ marginTop: "20px", width: "100%" }}
              />

              <Grid container sx={{ justifyContent: "space-around", marginTop: "25px" }}>
                <Grid item xs={12} lg={5}></Grid>
                <Grid item xs={12} md={3} lg={2}>
                  <DeleteButton />
                </Grid>
                <Grid item xs={12} md={3} lg={2}>
                  <EditButton />
                </Grid>

                <Grid item xs={12} md={3} lg={2}>
                  <Btn
                    disabled={
                      UserName === "" || item_description === "" || amount === "" || roti === ""
                    }
                    text="Order"
                    onClick={handleSubmit}
                  />
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Modal>
      </ThemeProvider>
    </div>
  );
}
