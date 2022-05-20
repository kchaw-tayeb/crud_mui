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
        barThickness: 5,
      },
      {
        label: "Users Lost",
        data: BarData.map((data) => data.userLost),
        backgroundColor: ["#C2D6F3"],
        // borderColor: "black",
        // borderWidth: 2,
        barThickness: 5,
      },
    ],
  });
  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        },
      },
      y: {
        stacked: true,
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
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
            mb: 5,
          }}
        >
          Desktop/Mobile
        </Typography>

        <Box sx={{ height: 320 }}>
          <Bar data={userData} options={options} />
        </Box>
      </Box>
    </Paper>
  );
}

export default BarChart;
