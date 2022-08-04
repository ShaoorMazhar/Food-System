import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { ThemeProvider } from "@mui/material/styles";

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

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Button
          className="modalButton"
          sx={{
            backgroundImage: `url(${props.background})`,
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
              backgroundImage: `url(${props.src})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat"
            }}>
            {props.data}
          </Box>
        </Modal>
      </ThemeProvider>
    </div>
  );
}
