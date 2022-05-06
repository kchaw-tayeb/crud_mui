import * as React from "react";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function BasicSwitches(props) {
  const { name, label, value, onChange } = props;
  const convertToDefEventPara = (name, value) => ({
    target: {
      name,
      value,
    },
  });
  return (
    <FormControl>
      <FormControlLabel
        label={label}
        control={
          <Switch
            name={name}
            checked={value}
            onChange={(e) =>
              onChange(convertToDefEventPara(name, e.target.checked))
            }
          />
        }
      />
    </FormControl>
  );
}
