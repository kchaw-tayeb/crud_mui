import React from "react";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";

import Box from "@mui/material/Box";
import SwipeableTextMobileStepper from "../components/common/images/Images";
import DragDrop from "../components/common/drackanddrop/DrackAndDrop";

const Images = () => {
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
        Chip Playground
      </Typography>

      <Breadcrumbs aria-label="breadcrumb" sx={{ mt: 1 }}>
        <Link underline="hover" color="#376fd0" href="/">
          Home
        </Link>

        <Typography color="rgba(0, 0, 0, 0.6)">Chip Playground</Typography>
      </Breadcrumbs>
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
        <Paper
          elevation={0}
          sx={{
            "& .MuiFormLabel-root": {
              fontSize: "0.85rem",
              color: "#495057",
            },

            width: "100%",

            borderRadius: "6px",
          }}
        >
          <Box
            sx={{
              pt: 1,

              "& 	.MuiDivider-root::before": {
                width: "1%",
              },
            }}
          >
            <DragDrop />
          </Box>
        </Paper>
      </Box>
    </div>
  );
};

export default Images;
