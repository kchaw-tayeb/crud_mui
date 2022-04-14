import React from "react";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";

import IconButton from "@mui/material/IconButton";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Typography from "@mui/material/Typography";

import Box from "@mui/material/Box";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import CloseIcon from "@mui/icons-material/Close";
function EditFormEmployee({ hidePopup, setEditEmployer, row }) {
  const id = row._id;
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [phone, setPhone] = useState(0);
  const [company, setCompany] = useState(id);
  const [data, setData] = useState(null);

  const navigate = useNavigate();
  //  ************************
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          `/api/employees/employer/${id}`
        );

        console.log(data);
        setFirstName(response.firstName);
        setSecondName(response.secondName);
        setPhone(response.phone);
        setCompany(response.company);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);
  /************************** */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const data = {
        firstName: firstName,
        secondName: secondName,
        phone: phone,
        company: company,
      };
      console.log(firstName);
      axios
        .put(`/api/employees/${id}`, data)

        .then((res) => {
          setData(res.data);
          setFirstName("");
          setSecondName("");
          setPhone(0);
          setCompany("");

          hidePopup();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const [errors, setErrors] = useState({});
  const validate = () => {
    let temp = {};
    temp.firstName = firstName ? "" : "this field is required";
    temp.secondName = secondName ? "" : "this field is required";
    temp.phone = phone ? "" : "this field is required";

    setErrors({
      ...temp,
    });
    return Object.values(temp).every((x) => x == "");
  };
  return (
    <Box
      sx={{
        borderRadius: "6px",

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
          mb: 1,

          borderRadius: "6px",
        }}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontSize: "1rem",
                fontWeight: 500,
                lineHeight: 1.25,
                color: "black",
                justifyContent: "flex-start",

                mt: 1,
              }}
            >
              Formik
            </Typography>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
              onClick={() => hidePopup()}
              sx={{ justifyContent: "flex-end" }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
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
              <Grid container spacing={2}>
                <Grid item xs={6} md={6}>
                  <TextField
                    id="outlined-basic"
                    label="First Name"
                    variant="outlined"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    size="small"
                    {...(errors.firstName && {
                      error: true,
                      helperText: errors.firstName,
                    })}
                  />
                </Grid>
                <Grid item xs={6} md={6}>
                  <TextField
                    id="outlined-basic"
                    label="Second Name"
                    variant="outlined"
                    value={secondName}
                    onChange={(e) => setSecondName(e.target.value)}
                    size="small"
                    {...(errors.secondName && {
                      error: true,
                      helperText: errors.secondName,
                    })}
                  />
                </Grid>
              </Grid>
            </Box>
            <TextField
              id="outlined-basic"
              label="Phone"
              variant="outlined"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              size="small"
              {...(errors.phone && {
                error: true,
                helperText: errors.phone,
              })}
            />
          </Box>

          <Button
            variant="contained"
            type="submit"
            onClick={handleSubmit}
            sx={{ mt: "12px" }}
            disableElevation
          >
            Save changes
          </Button>
          <Button
            variant="contained"
            type="submit"
            onClick={() => hidePopup()}
            sx={{ mt: "12px", ml: 2 }}
            disableElevation
          >
            Cancel
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default EditFormEmployee;
