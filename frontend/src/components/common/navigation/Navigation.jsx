import React from "react";
import { Box } from "@mui/material";
import SimpleAccordion from "./Accordion";
import TemporaryDrawer from "./DrawerRight";
import CustomizedMenus from "./MenuCustomization";
import BasicSpeedDial from "./SpeedDial";
import HorizontalLinearStepper from "./Stepper";

const Navigation = () => {
  return (
    <Box sx={{ m: 1 }}>
      <SimpleAccordion />
      <TemporaryDrawer />
      <CustomizedMenus />
      <HorizontalLinearStepper />
      <BasicSpeedDial />
    </Box>
  );
};

export default Navigation;
