import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Btn from "../components/button";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Typography from "@mui/material/Typography";
import { ToastContainer, toast } from "react-toastify";
import Divider from "@mui/material/Divider";
import RadioButtonsGroup from "../components/radioButtonGroup";
import { orderData, deleteOrder } from "../services/services";
import {
  order_item,
  order_delete,
  eveningOrderDelete,
  eveningOrderItem
} from "../redux/actions/action";
import { useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import { editOrder } from "../services/services";
import { useSelector } from "react-redux";
export default function TeaRequirements({ text, order }) {
  const [sugarQuantity, setSugarQuantity] = useState("");
  const [quantityError, setQuantityError] = useState(false);
  const [teaVolume, setTeaVolume] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => {
    const name = state?.signIn?.signIn;
    return name ? name : "";
  });

  const [userName, setUserName] = useState(user?.userName);
  const oId = useSelector((state) => state?.order[0]);
  const orderId = useSelector((state) => state?.eveningOrder[0]);
  useEffect(() => {
    if (order) {
      setSugarQuantity(order?.sugarQuantity);
      setTeaVolume(order?.teaVolume);
    }
  }, [order]);

  const handleSubmit = async (e) => {
    if (sugarQuantity === "") {
      setQuantityError(true);
    }
    let date = new Date().toLocaleString("en-US", {
      hourCycle: "h24"
    });
    date = date + "Z";
    e.preventDefault();
    const newOrder = {
      email: user?.email,
      employeeName: user?.userName,
      sugerQuantity: sugarQuantity,
      teaVolume: teaVolume,
      orderDate: date,
      orderType: text
    };
    const result = await orderData(newOrder);
    if (result?.status === 200) {
      toast("Your Order has been placed!");
      setSugarQuantity("");
      setTeaVolume("");
    } else {
      toast(result?.response?.data?.metadata?.message);
    }

    setQuantityError(false);
  };

  const handleEditOrder = async (e) => {
    e.preventDefault();

    if (text === "Morning-Tea") {
      const newOrder = {
        _id: oId?._id,
        sugerQuantity: sugarQuantity,
        teaVolume: teaVolume
      };
      const order = await editOrder(newOrder);

      if (order?.status === 200) {
        toast("Order updated Successfully!");
        setSugarQuantity("");
        setTeaVolume("");
      } else {
        toast(order?.response?.data?.metadata?.message);
      }
      dispatch(order_item(order));

      setQuantityError(false);
    } else if (text === "Evening-Tea") {
      const newOrder = {
        _id: orderId?._id,
        sugerQuantity: sugarQuantity,
        teaVolume: teaVolume
      };
      const order = await editOrder(newOrder);
      if (order?.status === 200) {
        toast("Order updated Successfully!");
        setSugarQuantity("");
        setTeaVolume("");
      } else {
        toast(order?.response?.data?.metadata?.message);
      }
      dispatch(eveningOrderItem(order));
    }
    setQuantityError(false);
  };

  const handleDeleteOrder = async (e) => {
    e.preventDefault();
    if (text === "Morning-Tea") {
      const order = await deleteOrder(oId?._id);
      if (order?.status === 200) {
        toast("Order Deleted Successfully!");
        setSugarQuantity("");
        setTeaVolume("");
      } else {
        toast(order?.response?.data?.metadata?.message);
      }
      dispatch(order_delete(order, oId?._id));
    } else if (text === "Evening-Tea") {
      const order = await deleteOrder(orderId?._id);
      if (order?.status === 200) {
        toast("Order Deleted Successfully!");
        setSugarQuantity("");
        setTeaVolume("");
      } else {
        toast(order?.response?.data?.metadata?.message);
      }

      dispatch(eveningOrderDelete(order, orderId?._id));
    }
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
          value={userName}
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
          error={quantityError}
          value={sugarQuantity}
          sx={{ marginTop: "20px", width: "100%" }}
        />
        <RadioButtonsGroup tea_volume={teaVolume} setTea_volume={setTeaVolume} />
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
              disabled={userName === "" || sugarQuantity === "" || teaVolume === ""}
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
