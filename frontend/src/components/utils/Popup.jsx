import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";

function Popup(props) {
  const { title, children, openPopup, setOpenPopup } = props;
  return (
    <Dialog
      open={openPopup}
      onBackdropClick={() => setOpenPopup(false)}
      fullWidth={true}
      maxWidth="md"
    >
      {/* <DialogTitle>
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
          onClick={() => setOpenPopup(false)}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle> */}
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
}

export default Popup;
