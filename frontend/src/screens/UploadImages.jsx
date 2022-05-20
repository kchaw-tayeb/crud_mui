import React from "react";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";

import Box from "@mui/material/Box";
import Chip from "../components/common/chip/Chip";
import UploadImageList from "../components/common/upload/UploadImageList";

const Uimages = () => {
  return (
    <div>
      <Typography
        variant="h3"
        component="div"
        gutterBottom
        sx={{
          margin: "0px 0px ",
          fontWeight: 600,
          lineHeight: 1.25,
          fontSize: "1.5 rem",
        }}
        color="black"
      >
        Images
      </Typography>
      <Typography
        variant="h6"
        component="div"
        gutterBottom
        sx={{
          margin: "0px 0px ",
          fontWeight: 400,
          lineHeight: 1.75,
          fontSize: "0.928571rem",
          mt: 1,
        }}
        color="black"
      >
        Welcome back, Lucy! We've missed you.
      </Typography>

      <Divider sx={{ marginTop: "24px", marginBottom: "24px" }} />
      <Box
        sx={{
          borderRadius: "6px",
          borderColor: "text.primary",

          "& .MuiButton-root": {
            backgroundColor: "rgb(55, 111, 208)",
            color: "rgb(255, 255, 255)",
            "&:hover": {
              backgroundColor: "#264E93",
            },
          },
        }}
      >
        <UploadImageList />
      </Box>
    </div>
  );
};

export default Uimages;
