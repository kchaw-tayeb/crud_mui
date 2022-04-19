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
import { useState } from "react";
import Controls from "../components/common/controls/Controls";
import { useForm, Form } from "../components/common/UseForm";

const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
  { id: "other", title: "Other" },
];
const initialFValues = {
  fullName: "",

  gender: "male",
  departmentId: "",

  isPermanent: false,
};
const Control = () => {
  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("fullName" in fieldValues)
      temp.fullName = fieldValues.fullName ? "" : "This field is required.";

    if ("departmentId" in fieldValues)
      temp.departmentId =
        fieldValues.departmentId.length != 0 ? "" : "This field is required.";
    setErrors({
      ...temp,
    });

    if (fieldValues == values) return Object.values(temp).every((x) => x == "");
  };
  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    useForm(initialFValues, true, validate);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(values);
    }
  };
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

        <Typography color="rgba(0, 0, 0, 0.6)">Forms</Typography>
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
          "& 	.MuiDivider-root::before": {
            width: "1%",
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
              {/* controls list */}
              {/* text field */}
              <Controls.Input
                name="fullName"
                label="Full Name"
                value={values.fullName}
                onChange={handleInputChange}
                error={errors.fullName}
              />
              {/* radio button */}
              <Controls.RadioGroup
                name="gender"
                label="Gender"
                value={values.gender}
                onChange={handleInputChange}
                items={genderItems}
              />
              {/* contol select  */}
              <Controls.Select
                name="departmentId"
                label="Department"
                value={values.departmentId}
                onChange={handleInputChange}
                options={[
                  { id: 1, title: "department 1" },
                  { id: 2, title: "department 2" },
                ]}
                error={errors.departmentId}
              />
              {/* chekbox */}
              <Controls.Checkbox
                name="isPermanent"
                label="Permanent Employee"
                value={values.isPermanent}
                onChange={handleInputChange}
              />
              {/* //////////////////////// */}
            </Box>

            <Button
              variant="contained"
              type="submit"
              sx={{ mt: "12px" }}
              disableElevation
              onClick={(e) => handleSubmit(e)}
            >
              Save changes
            </Button>
            <Button
              variant="contained"
              type="submit"
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

export default Control;
