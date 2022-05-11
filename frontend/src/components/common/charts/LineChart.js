import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { LineData } from "./DataLine";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function LineChart() {
  const [userData, setUserData] = useState({
    labels: LineData.map((data) => data.month),
    datasets: [
      {
        label: "Sales",
        data: LineData.map((data) => data.sales),
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
        borderColor: "#4782DA",
        borderWidth: 3,
        fill: false,
        lineTension: 0.4,
        radius: 1,
        pointBackgroundColor: "#FFFFFF",
        pointBorderColor: "#4782DA",
      },
      {
        label: "Orders",
        data: LineData.map((data) => data.orders),
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
        borderColor: "#9E9E9E",
        borderWidth: 3,
        fill: false,
        lineTension: 0.4,
        radius: 1,
        borderDash: [5, 5],
      },
    ],
  });
  const options = {
    maintainAspectRatio: false,
    scales: {
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
          Line Chart
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
          A line chart is a way of plotting data points on a line.
        </Typography>
        <Box sx={{ height: 320 }}>
          <Line data={userData} options={options} />
        </Box>
      </Box>
    </Paper>
  );
}

export default LineChart;
