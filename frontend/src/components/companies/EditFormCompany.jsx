import React from "react";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Typography from "@mui/material/Typography";

import Box from "@mui/material/Box";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listCompanyDetails } from "../../actions/companyActions";

function EditFormCompany() {
  const [name, setName] = useState("");
  const [adresse, setAdresse] = useState("");
  const [phone, setPhone] = useState(0);
  const [tva, setTva] = useState("");
  const [data, setData] = useState(null);

  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;
  const dispatch = useDispatch();
  const companyDetails = useSelector((state) => state.companyDetails);
  const { company } = companyDetails;
  useEffect(() => {
    dispatch(listCompanyDetails(id));
  }, [dispatch, id]);
  useEffect(() => {
    setName(company.name || "");
    setAdresse(company.adresse || "");
    setPhone(company.phone || 0);
    setTva(company.tva || "");
  }, [company]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const data = {
        name: name,
        adresse: adresse,
        phone: phone,
        tva: tva,
      };
      axios
        .put(`/api/companies/${id}`, data)
        .then((res) => {
          setData(res.data);
          setName("");
          setAdresse("");
          setPhone(0);
          setTva("");
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const [errors, setErrors] = useState({});
  const validate = () => {
    let temp = {};
    temp.name = name ? "" : "this field is required";
    temp.adresse = adresse ? "" : "this field is required";
    temp.phone = phone ? "" : "this field is required";
    temp.tva = tva ? "" : "this field is required";
    setErrors({
      ...temp,
    });
    return Object.values(temp).every((x) => x == "");
  };

  return (
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
              {...(errors.name && { error: true, helperText: errors.name })}
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
                    {...(errors.adresse && {
                      error: true,
                      helperText: errors.adresse,
                    })}
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
                    {...(errors.phone && {
                      error: true,
                      helperText: errors.phone,
                    })}
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
              {...(errors.tva && {
                error: true,
                helperText: errors.tva,
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
            onClick={() => navigate("/")}
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

export default EditFormCompany;
