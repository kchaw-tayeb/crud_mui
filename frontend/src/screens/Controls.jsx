import React from "react";

import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useState, useEffect } from "react";
import Chip from "@mui/material/Chip";
import CountrySelect from "../components/controls/Autocomplete";
import Checkboxes from "../components/controls/Chekbox";
import RadioButtonsGroup from "../components/controls/RadioButton";
import BasicRating from "../components/controls/Rating";
import DiscreteSliderSteps from "../components/controls/Slider";

const Controls = () => {
  const [name, setName] = useState("");
  const [adresse, setAdresse] = useState("");
  const [phone, setPhone] = useState(0);
  const [tva, setTva] = useState("");
  const [data, setData] = useState(null);
  return (
    <div>
      <Typography
        variant="h3"
        component="div"
        gutterBottomsx={{
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

        <Typography color="rgba(0, 0, 0, 0.6)">Forms</Typography>
      </Breadcrumbs>
      <Divider sx={{ marginTop: "24px", marginBottom: "24px" }} />
      <Box
        sx={{
          borderRadius: "6px",
          borderColor: "text.primary",
          // border: 1,
          "& .MuiButton-root": {
            backgroundColor: "rgb(55, 111, 208)",
            color: "rgb(255, 255, 255)",
            "&:hover": {
              backgroundColor: "#264E93",
            },
          },
          "& 	.MuiDivider-root::before": {
            width: "1%",
          },
        }}
      >
        <Paper
          elevation={0}
          sx={{
            //   margin: 5,
            //   padding: 3,
            "& .MuiFormLabel-root": {
              fontSize: "0.85rem",
              color: "#495057",
            },

            // width: "995px",
            width: "100%",

            borderRadius: "6px",
          }}
        >
          <Box sx={{ pl: 2, pr: 2, pt: 1, pb: 2 }}>
            <Typography
              variant="h6"
              sx={{
                fontSize: "1rem",
                fontWeight: 500,
                lineHeight: 1.25,
                color: "black",

                mb: 1,
                mt: 1,
              }}
            >
              Formik
            </Typography>
            <Box
              component="form"
              sx={{
                "& .MuiFormControl-root": {
                  width: "100%",
                  mt: 1,
                  mb: 1,
                  boxSizing: "content-box",
                },
                "& .MuiInputBase-root": {
                  boxSizing: "border-box",
                  color: "#495057",
                },
                "& .MuiOutlinedInput-root": {
                  borderRadius: "4px",
                },
                "& .MuiOutlinedInput-input": {
                  padding: "16.5px 14px",
                },
                "& .MuiInputLabel-root": {
                  color: "rgba(0, 0, 0, 0.6)",
                  fontSize: "13px",
                  fontWeight: 400,
                },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
                size="small"
              />
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                  <Grid item xs={6} md={6}>
                    <TextField
                      id="outlined-basic"
                      label="Adresse"
                      variant="outlined"
                      value={adresse}
                      onChange={(e) => setAdresse(e.target.value)}
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <TextField
                      id="outlined-basic"
                      label="Phone"
                      variant="outlined"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      size="small"
                    />
                  </Grid>
                </Grid>
              </Box>
              <TextField
                id="outlined-basic"
                label="Tva"
                variant="outlined"
                value={tva}
                onChange={(e) => setTva(e.target.value)}
                size="small"
              />
              {/* <TextField
              id="outlined-basic"
              label="Tva"
              variant="outlined"
              value={tva}
              onChange={(e) => setTva(e.target.value)}
              size="small"
            /> */}
              {/* <TextField
              id="outlined-basic"
              label="Tva"
              variant="outlined"
              value={tva}
              onChange={(e) => setTva(e.target.value)}
              size="small"
            /> */}
            </Box>
            {/* <Link to="/">
            <IconButton
              color="default"
              aria-label="upload picture"
              component="span"
            >
              <ArrowBackIcon />
            </IconButton>
          </Link> */}
            {/* <IconButton
            color="default"
            aria-label="upload picture"
            component="span"
            type="submit"
            onClick={handleSubmit}
          >
            <SaveIcon />
          </IconButton> */}
            <Divider
              textAlign="left"
              orientation="horizontal"
              sx={{ marginTop: "24px", marginBottom: "24px" }}
            >
              Left
            </Divider>
            {/* <Typography
              variant="h6"
              sx={{
                fontSize: "1rem",
                fontWeight: 500,
                lineHeight: 1.25,
                color: "black",

                mb: 1,
                mt: 1,
              }}
            >
              Formik
            </Typography> */}
            <Box
              component="form"
              sx={{
                "& .MuiFormControl-root": {
                  width: "100%",
                  mt: 1,
                  mb: 1,
                  boxSizing: "content-box",
                },
                "& .MuiInputBase-root": {
                  boxSizing: "border-box",
                  color: "#495057",
                },
                "& .MuiOutlinedInput-root": {
                  borderRadius: "4px",
                },
                "& .MuiOutlinedInput-input": {
                  padding: "16.5px 14px",
                },
                "& .MuiInputLabel-root": {
                  color: "rgba(0, 0, 0, 0.6)",
                  fontSize: "13px",
                  fontWeight: 400,
                },
              }}
              noValidate
              autoComplete="off"
            >
              <Box sx={{ flexGrow: 1 }}>
                <Grid container>
                  <Grid item xs>
                    <CountrySelect />
                    <RadioButtonsGroup />
                    <DiscreteSliderSteps />
                  </Grid>
                  <Divider orientation="vertical" flexItem>
                    VERTICAL
                  </Divider>
                  <Grid item xs sx={{ ml: 8 }}>
                    <Checkboxes />
                    <BasicRating />
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs>
                    <CountrySelect />
                    <CountrySelect />
                    <CountrySelect />
                    <CountrySelect />
                  </Grid>
                  <Divider orientation="vertical" flexItem>
                    VERTICAL
                  </Divider>
                  <Grid item xs sx={{ ml: 8 }}>
                    <CountrySelect />
                    <CountrySelect />
                    <CountrySelect />
                    <CountrySelect />
                  </Grid>
                </Grid>
              </Box>
            </Box>
            {/* Button */}
            <Button
              variant="contained"
              type="submit"
              //   onClick={handleSubmit}
              sx={{ mt: "12px" }}
              disableElevation
            >
              Save changes
            </Button>
            <Button
              variant="contained"
              type="submit"
              //   onClick={() => navigate("/")}
              sx={{ mt: "12px", ml: 2 }}
              disableElevation
            >
              Cancel
            </Button>
          </Box>
        </Paper>
      </Box>
    </div>
  );
};

export default Controls;
