import React, { useEffect } from "react";
import {
  FormControl,
  FormControlLabel,
  Checkbox as MuiCheckbox,
  FormLabel,
  FormGroup,
} from "@mui/material";
import { useState } from "react";

export default function CheckboxGroup(props) {
  // const { name, label, value, onChange, eskills, setEskills } = props;
  const { name, label, value, onChange } = props;
  const [skills, setSkills] = useState([]);
  // console.log(skills.toString());
  const convertToDefEventPara = (name, value) => ({
    target: {
      name,
      value,
    },
  });
  const handleSkillChange = (e) => {
    const index = skills.indexOf(e.target.value);

    if (index === -1) {
      setSkills([...skills, e.target.value]);
      // onChange(convertToDefEventPara(name, skills.toString()));
    } else {
      setSkills(skills.filter((skill) => skill !== e.target.value));
    }
    // onChange(convertToDefEventPara(name, skills.toString()));
  };
  useEffect(() => {
    onChange(convertToDefEventPara(name, skills.toString()));
  }, [skills]);
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <FormGroup row>
        <FormControlLabel
          //   label={label}
          label="html"
          control={
            <MuiCheckbox
              value="html"
              //   name={name}
              color="primary"
              checked={skills.includes("html")}
              //   onChange={(e) =>
              //     onChange(convertToDefEventPara(name, e.target.checked))
              //   }
              onChange={handleSkillChange}
            />
          }
        />
        <FormControlLabel
          //   label={label}
          label="css"
          control={
            <MuiCheckbox
              value="css"
              //   name={name}
              color="primary"
              checked={skills.includes("css")}
              onChange={handleSkillChange}
            />
          }
        />
        <FormControlLabel
          //   label={label}
          label="javascript"
          control={
            <MuiCheckbox
              value="javascript"
              //   name={name}
              color="primary"
              checked={skills.includes("javascript")}
              onChange={handleSkillChange}
            />
          }
        />
      </FormGroup>
    </FormControl>
  );
}
