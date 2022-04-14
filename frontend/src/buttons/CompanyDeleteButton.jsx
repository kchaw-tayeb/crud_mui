import React from "react";

import IconButton from "@mui/material/IconButton";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import axios from "axios";
import { useState, useEffect } from "react";
import ConfirmDialog from "../components/utils/ConfirmDialog";

function CompanyDeleteButton({ row, setDeleteI }) {
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

          // .delete("/api/companies/6200b641479c02277c371b3b")
          .then(setDeleteI(true))
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
        // onClick={handleDelete}
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
