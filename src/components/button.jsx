import React from "react";
import Button from "@mui/material/Button";
import ClipLoader from "react-spinners/ClipLoader";
export default function Btn({ disabled, color, icon, onClick, text, variant, type, loading }) {
  return (
    <Button
      type={type}
      disabled={disabled}
      color={color}
      sx={{ marginTop: "20px", width: "100%" }}
      variant={variant}
      endIcon={icon}
      onClick={onClick}>
      {loading ? <ClipLoader /> : text}
    </Button>
  );
}
