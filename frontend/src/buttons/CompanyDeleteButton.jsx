import React from "react";

import IconButton from "@mui/material/IconButton";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import axios from "axios";
import { useState, useEffect } from "react";
import ConfirmDialog from "../components/utils/ConfirmDialog";
import { useNavigate } from "react-router-dom";

function CompanyDeleteButton({ row, setDeleteI, deleteI }) {
  const deletei = !deleteI;
  const navigate = useNavigate();

  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
  });
  const handleDelete = (id) => {
    setConfirmDialog({
      isOpen: true,
      title: "are you sure to delete this",
      subTitle: "you can't udo this operation",
      onConfirm: () => {
        setConfirmDialog({
          ...confirmDialog,
          isOpen: false,
        });
        axios
          .delete(`/api/companies/${id}`)

          .then((deletei) => setDeleteI(deletei))

          .catch((error) => {
            console.error("There was an error!", error);
          });
      },
    });
  };

  return (
    <>
      <IconButton
        color="default"
        aria-label="upload picture"
        component="span"
        onClick={() => handleDelete(row._id)}
        size={"small"}
      >
        <DeleteForeverIcon />
      </IconButton>
      <ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
    </>
  );
}

export default CompanyDeleteButton;
