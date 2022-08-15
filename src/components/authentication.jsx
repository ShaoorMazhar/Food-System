import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Authentication(props) {
  const { Component } = props;
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("email")) {
      navigate("/adminLogin");
    } else {
      navigate("/adminPortal");
    }
  }, []);
  return (
    <div>
      <Component />
    </div>
  );
}
