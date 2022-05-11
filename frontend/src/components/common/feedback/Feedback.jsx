import { Box } from "@mui/material";
import React from "react";
import BasicAlerts from "./Alert";
import ActionAlerts from "./AlertActions";
import TransitionAlerts from "./AlertTransition";
import SimpleBackdrop from "./Backdrop";
import SimpleDialogDemo from "./BasicDialog";
import AlertDialog from "./DialogAlert";
import CircularIntegration from "./InteractiveIntegration";
import PositionedSnackbar from "./PositionnedAlert";
import SimpleSnackbar from "./SnackBar";

const Feedback = () => {
  return (
    <Box sx={{ m: 1 }}>
      <BasicAlerts />
      <ActionAlerts />
      <TransitionAlerts />
      <SimpleBackdrop />
      <SimpleDialogDemo />
      <AlertDialog />
      <CircularIntegration />
      <SimpleSnackbar />
      <PositionedSnackbar />
    </Box>
  );
};

export default Feedback;
