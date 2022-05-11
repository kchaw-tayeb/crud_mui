import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { BarData } from "./DataBar";
import Paper from "@mui/material/Paper";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
function BarChart() {
  const [userData, setUserData] = useState({
    labels: BarData.map((data) => data.month),
    datasets: [
      {
        label: "Users Gained",
        data: BarData.map((data) => data.userGain),
        backgroundColor: [
          "#4782DA",
          "#4782DA",
          "#4782DA",
          "#4782DA",
          "#4782DA",
          "#4782DA",
          "#4782DA",
          "#4782DA",
          "#4782DA",
          "#4782DA",
          "#4782DA",
          "#4782DA",
        ],
        // borderColor: "black",
        // borderWidth: 2,
        barThickness: 8,
      },
      {
        label: "Users Lost",
        data: BarData.map((data) => data.userLost),
        backgroundColor: [
          "#E0E0E0",
          "#E0E0E0",
          "#E0E0E0",
          "#E0E0E0",
          "#E0E0E0",
          "#E0E0E0",
          "#E0E0E0",
          "#E0E0E0",
          "#E0E0E0",
          "#E0E0E0",
          "#E0E0E0",
          "#E0E0E0",
        ],
        // borderColor: "black",
        // borderWidth: 2,
        barThickness: 8,
      },
    ],
  });
  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
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
          Bar Chart
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
          A bar chart provides a way of showing data values represented as
          vertical bars.
        </Typography>
        <Box sx={{ height: 320 }}>
          <Bar data={userData} options={options} />
        </Box>
      </Box>
    </Paper>
  );
}

export default BarChart;
