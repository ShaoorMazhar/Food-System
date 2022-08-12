import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import Modal from "@mui/material/Modal";
import { ThemeProvider } from "@mui/material/styles";
import { getEmployeeOrder, getAllOrders } from "../services/services";
import { order_item } from "../redux/actions/action";
import { order_record } from "../redux/actions/action";
import theme from "../theme";

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

export default function BasicModal({ disabled, type, background, src, data }) {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [orderRecord, setOrderRecord] = useState("");
  console.log("orderRecord", orderRecord);
  const handleOpen = () => {
    setOpen(true);
    const callingApi = () => {
      getEmployeeOrder(user.email, type)
        .then((res) => {
          dispatch(order_item(res?.data?.payload?.data));
        })
        .catch((err) => {
          console.log(err);
        });
      useDispatch;
    };
    callingApi();
    const gettingOrders = () => {
      getAllOrders(type)
        .then((res) => {
          setOrderRecord(res?.data?.payload?.data);
          dispatch(order_record(res?.data?.payload?.data));
        })
        .catch((err) => {
          console.log(err);
        });
      useDispatch;
    };
    gettingOrders();
  };
  const handleClose = () => setOpen(false);
  const user = useSelector((state) => {
    const name = state?.signIn?.signIn;
    return name ? name : "";
  });

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Button
          className="modalButton"
          disabled={disabled}
          type={type}
          sx={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            color: "#fafafa",
            width: "15vw",
            height: "15vw",
            padding: "41px",
            borderRadius: "50%",
            marginRight: "15px",
            opacity: "1",
            transition: "0.3s"
          }}
          onClick={handleOpen}
        />

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description">
          <Box
            sx={{
              ...style,
              width: "50vw",
              backgroundImage: `url(${src})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat"
            }}>
            {data}
          </Box>
        </Modal>
      </ThemeProvider>
    </div>
  );
}
