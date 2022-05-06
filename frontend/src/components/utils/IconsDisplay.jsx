import React, { useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import IconButton from "@mui/material/IconButton";

const icons = [<DoneIcon />, <DoneAllIcon />, <DoneOutlineIcon />];

const IconsDisplay = () => {
  const [i, setI] = useState(0);
  const onClick = () => {
    setI(i + 1);
    if (i === icons.length - 1) {
      setI(0);
    }
  };

  return (
    <IconButton
      color="primary"
      aria-label="upload picture"
      component="span"
      onClick={onClick}
    >
      {icons[i]}
    </IconButton>
  );
};

export default IconsDisplay;
