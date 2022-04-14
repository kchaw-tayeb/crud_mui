import React from "react";
import Popup from "../utils/Popup";
import EditFormEmployee from "../employeesForm/EditFormEmployee";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";

function TableEditButtonEmployer({ setEditEmployer, row, editEmployer }) {
  const [openPopup, setOpenPopup] = useState(false);
  const hidePopup = () => {
    setOpenPopup(false);
    setEditEmployer(!editEmployer);
  };

  return (
    <>
      <IconButton
        color="default"
        aria-label="upload picture"
        component="span"
        onClick={() => setOpenPopup(true)}
      >
        <EditIcon />
      </IconButton>
      <Popup openPopup={openPopup} setOpenPopup={setOpenPopup}>
        <EditFormEmployee
          hidePopup={hidePopup}
          setEditEmployer={setEditEmployer}
          row={row}
        />
      </Popup>
    </>
  );
}

export default TableEditButtonEmployer;
