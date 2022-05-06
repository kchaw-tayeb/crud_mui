import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
export default function AutoComplete(props) {
  const { name, label, value, error = null, onChange, options } = props;
  const convertToDefEventPara = (name, value) => ({
    target: {
      name,
      value,
    },
  });
  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <Typography component="legend">{label}</Typography>
      <Autocomplete
        options={options}
        renderInput={(params) => <TextField {...params} label={label} />}
        onChange={(event, newValue) =>
          onChange(convertToDefEventPara(name, newValue))
        }
      />
    </Box>
  );
}
