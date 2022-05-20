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
        backgroundColor: ["#4782DA"],
        borderColor: "#4782DA",
        borderWidth: 3,
        fill: true,
        lineTension: 0.4,
        radius: 1,
        // pointBackgroundColor: "#FFFFFF",
        pointBorderColor: "#4782DA",
        pointRadius: 3,
        pointBorderWidth: 1,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 400);
          gradient.addColorStop(0, "rgba(241,245,250,1)");
          gradient.addColorStop(1, "rgba(241,245,250,0)");
          return gradient;
        },
      },
      {
        label: "Orders",
        data: LineData.map((data) => data.orders),
        backgroundColor: ["#E0E0E0"],
        borderColor: "#9E9E9E",
        borderWidth: 3,
        pointRadius: 3,
        pointBorderWidth: 1,
        fill: false,
        lineTension: 0.4,
        radius: 1,
        borderDash: [5, 5],
      },
    ],
  });
  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
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
          Total revenue
        </Typography>

        <Box sx={{ height: 400, mt: 4 }}>
          <Line data={userData} options={options} />
        </Box>
      </Box>
    </Paper>
  );
}

export default LineChart;
