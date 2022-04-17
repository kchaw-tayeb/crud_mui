import React from "react";
import ConfirmDialog from "../utils/ConfirmDialog";
import { useState } from "react";
import axios from "axios";
import IconButton from "@mui/material/IconButton";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

function TableDeleteButtonEmployer({ row, setDeleteIE, deleteIE }) {
  const deletei = !deleteIE;

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
          .delete(`/api/employees/${id}`)

          .then((deletei) => setDeleteIE(deletei))
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
export default TableDeleteButtonEmployer;
