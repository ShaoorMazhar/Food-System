import React from "react";
import Button from "@mui/material/Button";
export default function Btn({ disabled, color, icon, onClick, text, variant, type }) {
  return (
    <Button
      type={type}
      disabled={disabled}
      color={color}
      sx={{ marginTop: "20px", width: "100%" }}
      variant={variant}
      endIcon={icon}
      onClick={onClick}>
      {text}
    </Button>
  );
}
