import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { ThemeProvider } from "@mui/material/styles";
import RadioButtonsGroup from "../components/radioButtonGroup";
import theme from "../theme";
import Btn from "../components/button";
import EditButton from "../components/editButton";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
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

export default function MoriningTeaModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [UserName, setUserName] = useState("");
  const [sugar_quantity, setSugar_quantity] = useState("");
  const [tea_volume, setTea_volume] = useState("half cup");
  const handleSubmit = (e) => {
    e.preventDefault();
    // toast("Product added successfully!");
    // const newProducts = {
    //   name: name,
    //   category: category,
    //   price: price,
    //   quantity: quantity
    // };
    // const DataApi = await addProductData(newProducts, id);

    // dispatch(addProduct(DataApi));
    // setProducts([...products, newProducts]);
    console.log(UserName, sugar_quantity, tea_volume);
    setUserName("");
    setSugar_quantity("");
    setTea_volume("half cup");
    // navigate(`/table/storeProducts/${id}`);
  };
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Button
          sx={{
            backgroundColor: "primary.main",
            color: "#fafafa",
            width: "15vw",
            height: "15vw",
            padding: "41px",
            borderRadius: "50%",
            marginRight: ".5rem"
          }}
          endIcon={<LocalCafeIcon />}
          onClick={handleOpen}>
          Morning Tea
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
              backgroundImage: `url("https://img.freepik.com/premium-photo/coffee-break-minimal-white-blue-background-template-with-cup-coffee-copy-space_197174-9.jpg?w=2000")`,
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
                Add Tea Details
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
                  setSugar_quantity(e.target.value);
                }}
                type="number"
                id="suger_quantity"
                label="Sugar Quantity(spoon)"
                variant="outlined"
                value={sugar_quantity}
                sx={{ marginTop: "20px", width: "100%" }}
              />
              <RadioButtonsGroup tea_volume={tea_volume} setTea_volume={setTea_volume} />
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
                    disabled={UserName === "" || sugar_quantity === "" || tea_volume === ""}
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
