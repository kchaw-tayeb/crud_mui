import React, { useEffect } from "react";

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
import Rating from "../components/common/controls/Rating";
import Slider from "../components/common/controls/Slider";

import Switch from "../components/common/controls/Switch";
import ToggleButton from "../components/common/controls/ToggleButton";
import TransferList from "../components/common/controls/TransferList";
import BasicDatePicker from "../components/common/controls/DatePicker";
import AutoComplete from "../components/common/controls/AutoComplete";
import AutoCompleteMultiple from "../components/common/controls/AutoCompleteMultipleValue";

const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
  { id: "other", title: "Other" },
];
const options = ["ooredoo", "orange", "tunisie telecom"];
const optionsM = ["sport", "music", "reading", "writing"];
const initialFValues = {
  fullName: "",

  gender: "male",
  departmentId: "",
  skills: "",
  isPermanent: false,
  hireDate: new Date(),
  range: [20, 37],
  rating: 2,
  company: "",
  isActive: false,
  hobbies: "",
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
  // const [eskills, setEskills] = useState([]);
  // console.log(eskills);
  // useEffect(() => {
  //   setValues({
  //     ...values,
  //     skills: eskills.toString(),
  //   });
  // }, [eskills]);

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
              {/* chekbox group */}
              <Controls.CheckboxGroup
                name="skills"
                label="skills"
                value={values.skills}
                onChange={handleInputChange}
                // eskills={eskills}
                // setEskills={setEskills}
              />
              <BasicDatePicker
                name="hireDate"
                label="Hire Date"
                value={values.hireDate}
                onChange={handleInputChange}
              />
              <Slider
                name="range"
                label="range"
                value={values.range}
                onChange={handleInputChange}
              />
              <Rating
                name="rating"
                label="rating"
                value={values.rating}
                onChange={handleInputChange}
              />
              <AutoComplete
                name="company"
                label="Company"
                value={values.company}
                onChange={handleInputChange}
                options={options}
              />
              {/* switch */}
              <Switch
                name="isActive"
                label="Active Employee"
                value={values.isActive}
                onChange={handleInputChange}
              />
              <AutoCompleteMultiple
                name="hobbies"
                label="Hobbies"
                value={values.hobbies}
                onChange={handleInputChange}
                options={optionsM}
              />
              <ToggleButton />
              <TransferList />
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
