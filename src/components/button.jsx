import React from "react";
import Button from "@mui/material/Button";
export default function Btn({ disabled, color, icon, onClick, text }) {
  return (
    <Button
      disabled={disabled}
      color={color}
      sx={{ marginTop: "20px", width: "100%" }}
      variant="contained"
      endIcon={icon}
      onClick={onClick}>
      {text}
    </Button>
  );
}
