import React from "react";

import IconButton from "@mui/material/IconButton";
import CenterFocusWeakIcon from "@mui/icons-material/CenterFocusWeak";

import { useNavigate } from "react-router-dom";

export function DetailsButton({ row }) {
  const navigate = useNavigate();

  const handlePush = (id) => {
    navigate(`/company/${row._id}`);
  };

  return (
    <IconButton
      color="default"
      aria-label="upload picture"
      component="span"
      onClick={() => handlePush()}
      size={"small"}
    >
      <CenterFocusWeakIcon />
    </IconButton>
  );
}
