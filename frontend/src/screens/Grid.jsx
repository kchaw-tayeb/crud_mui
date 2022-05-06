import React from "react";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const BasicGrid = () => {
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
        Basic Grid
      </Typography>

      <Breadcrumbs aria-label="breadcrumb" sx={{ mt: 1 }}>
        <Link underline="hover" color="#376fd0" href="/">
          Home
        </Link>

        <Typography color="rgba(0, 0, 0, 0.6)">Basic Grid</Typography>
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
            p: 1,
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
            {/* this is a basic grid */}
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={8}>
                  <Item>xs=8</Item>
                </Grid>
                <Grid item xs={4}>
                  <Item>xs=4</Item>
                </Grid>
                <Grid item xs={4}>
                  <Item>xs=4</Item>
                </Grid>
                <Grid item xs={8}>
                  <Item>xs=8</Item>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Box sx={{ mt: 3, mb: 2 }}>
            <Link
              href="https://mui.com/material-ui/react-grid/#main-content"
              target="_blank"
            >
              Documentaion
            </Link>
          </Box>
        </Paper>
      </Box>
    </div>
  );
};

export default BasicGrid;
