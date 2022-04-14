import React from "react";

import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";

import { useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom";

export function EditButton({ row }) {
  const navigate = useNavigate();
  // const history = useHistory();
  const handlePush = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <IconButton
      color="default"
      aria-label="upload picture"
      component="span"
      onClick={() => handlePush(row._id)}
      size={"small"}
    >
      <EditIcon />
    </IconButton>
  );
}
