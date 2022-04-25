import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

export default function BasicRating(props) {
  const { name, label, value, onChange } = props;
  // const [value, setValue] = React.useState(2);

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
      <Rating
        name={label}
        value={value}
        // onChange={(event, newValue) => {
        //   setValue(newValue);
        // }}
        onChange={(event, newValue) =>
          onChange(convertToDefEventPara(name, newValue))
        }
      />
    </Box>
  );
}
