import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Btn from "../components/button";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { editOrder } from "../services/services";
import { ToastContainer, toast } from "react-toastify";
import { orderData, deleteOrder } from "../services/services";
import { lunch_Order_Item } from "../redux/actions/action";
import { useSelector, useDispatch } from "react-redux";

export default function LunchRequirement({ text, order }) {
  const [itemDescription, setItemDescription] = useState("");
  const [rotiQuantity, setRotiQuantity] = useState("");
  const [amount, setAmount] = useState("");

  const dispatch = useDispatch();
  const user = useSelector((state) => {
    const name = state?.signIn?.signIn;
    return name ? name : "";
  });
  const [userName, setUserName] = useState(user?.userName);
  const oId = useSelector((state) => state?.lunchOrder[0]);

  useEffect(() => {
    if (order?.itemDescription && order?.rotiQuantity && order?.amount) {
      setItemDescription(order?.itemDescription);
      setRotiQuantity(order?.rotiQuantity);
      setAmount(order?.amount);
    }
  }, [order]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let date = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Karachi",
      hourCycle: "h24"
    });
    date = date + "Z";
    const newOrder = {
      email: user?.email,
      employeeName: user?.userName,
      extras: itemDescription,
      rotiQuantity: rotiQuantity,
      amount: amount,
      orderDate: date,
      orderType: text
    };
    const result = await orderData(newOrder);
    if (result?.status === 200) {
      toast("Your Order has been placed!");
      setItemDescription("");
      setRotiQuantity("");
      setAmount("");
      location.reload();
    } else {
      toast(result?.response?.data?.metadata?.message);
    }
  };

  const handleEditOrder = async (e) => {
    e.preventDefault();
    const newOrder = {
      _id: oId?._id,
      extras: itemDescription,
      rotiQuantity: rotiQuantity,
      amount: amount
    };
    const userOrder = await editOrder(newOrder);
    if (userOrder?.status === 200) {
      toast(userOrder?.data?.metadata?.message);
      location.reload();
    } else {
      toast(userOrder?.response?.data?.metadata?.message);
    }
    dispatch(lunch_Order_Item(userOrder));
  };

  const handleDeleteOrder = async (e) => {
    e.preventDefault();
    const lunchOrder = await deleteOrder(oId?._id);
    if (lunchOrder?.status === 200) {
      toast(lunchOrder?.data?.metadata?.message);
      setItemDescription("");
      setRotiQuantity("");
      setAmount("");
    } else {
      toast(lunchOrder?.response?.data?.metadata?.message);
    }
    dispatch(lunch_Order_Item(lunchOrder));
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
      <Grid item xs={12} md={8}>
        <Divider />
        <TextField
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          id="Username"
          label="User Name"
          variant="outlined"
          value={userName}
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
            setRotiQuantity(e.target.value);
          }}
          type="number"
          id="roti"
          label="Roti"
          variant="outlined"
          value={rotiQuantity}
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

        <Grid container sx={{ justifyContent: "space-around", marginTop: "25px" }}>
          <Grid item xs={12} lg={5}></Grid>
          <Grid item xs={12} md={3} lg={2}>
            <Btn
              color="error"
              text="Delete"
              onClick={handleDeleteOrder}
              variant="contained"
              endIcon={<DeleteIcon />}
            />
          </Grid>
          <Grid item xs={12} md={3} lg={2}>
            <Btn text="Edit" variant="contained" endIcon={<EditIcon />} onClick={handleEditOrder} />
          </Grid>
          <Grid item xs={12} md={3} lg={2}>
            <Btn
              disabled={!rotiQuantity || !itemDescription || !amount}
              text="Order"
              onClick={handleSubmit}
              variant="contained"
              endIcon={<CheckIcon />}
            />
          </Grid>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </Grid>
      </Grid>
    </Box>
  );
}
