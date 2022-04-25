import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider(props) {
  const { name, label, value, onChange } = props;
  const [intervall, setIntervall] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setIntervall(newValue);
  };
  const convertToDefEventPara = (name, value) => ({
    target: {
      name,
      value,
    },
  });
  useEffect(() => {
    onChange(convertToDefEventPara(name, intervall));
  }, [intervall]);
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </Box>
  );
}
