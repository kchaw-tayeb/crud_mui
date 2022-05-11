import React, { useState } from "react";
import { PolarArea } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { PolarData } from "./DataPolar";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
function PolarChart({ chartData }) {
  const [userData, setUserData] = useState({
    labels: PolarData.map((data) => data.system),
    datasets: [
      {
        label: "Media",
        data: PolarData.map((data) => data.numbers),
        backgroundColor: [
          "#4782DA",
          "#FBC02D",
          "#FF9800",
          "#F44336",
          "#CACACA",
        ],
      },
    ],
  });

  const options = {
    maintainAspectRatio: false,
  };

  return (
    <Paper sx={{ p: 2 }}>
      <Box>
        <Typography
          variant="h6"
          sx={{
            fontSize: "1rem",
            fontWeight: 500,
            lineHeight: 1.25,
            color: "black",
          }}
        >
          Polar Area Chart
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: "0.8125rem",
            fontWeight: 400,
            lineHeight: 1.43,
            color: "rgba(0, 0, 0, 0.87)",
            mt: 0.7,
          }}
        >
          Polar area charts are similar to pie charts, but each segment has the
          same angle.
        </Typography>
        <Box sx={{ width: 450, height: 400 }}>
          <PolarArea data={userData} options={options} />
        </Box>
      </Box>
    </Paper>
  );
}

export default PolarChart;
