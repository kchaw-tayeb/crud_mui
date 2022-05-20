import React from "react";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";

import Box from "@mui/material/Box";
import Chip from "../components/common/chip/Chip";
import DefaultDashboard from "../components/common/dashboard/DefaultDashboard";

const Dashboard = () => {
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
        Default Dashboard
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
        {/* <Paper
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
          > */}
        <DefaultDashboard />
        {/* </Box>
        </Paper> */}
      </Box>
    </div>
  );
};

export default Dashboard;
