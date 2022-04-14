import React from "react";

import Dialog from "@mui/material/Dialog";

import DialogContent from "@mui/material/DialogContent";

function Popup(props) {
  const { title, children, openPopup, setOpenPopup } = props;
  return (
    <Dialog
      open={openPopup}
      onBackdropClick={() => setOpenPopup(false)}
      fullWidth={true}
      maxWidth="md"
    >
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
}

export default Popup;
