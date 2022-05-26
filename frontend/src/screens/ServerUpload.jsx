import React from "react";

import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";

import Box from "@mui/material/Box";
import GridData from "../components/common/GridData";

import { useState } from "react";
import Upload from "../components/common/serverUpload/Upload";

const ServerUpload = () => {
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
        Forms
      </Typography>

      <Breadcrumbs aria-label="breadcrumb" sx={{ mt: 1 }}>
        <Link underline="hover" color="#376fd0" href="/">
          Home
        </Link>

        <Typography color="rgba(0, 0, 0, 0.6)">Client</Typography>
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
            <Typography
              variant="h6"
              sx={{
                fontSize: "1rem",
                fontWeight: 500,
                lineHeight: 1.25,
                color: "black",

                mb: 2,
                mt: 1,
                ml: 2,
              }}
            >
              Upload To Server
            </Typography>
            <Upload />
          </Box>
        </Paper>
      </Box>
    </div>
  );
};

export default ServerUpload;
