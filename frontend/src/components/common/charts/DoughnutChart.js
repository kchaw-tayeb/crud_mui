import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { PieData } from "./DataPie";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
function DoughnutChart({ chartData }) {
  const [userData, setUserData] = useState({
    labels: PieData.map((data) => data.media),
    datasets: [
      {
        label: "Media",
        data: PieData.map((data) => data.numbers),
        backgroundColor: ["#0569FF", "#FF9800", "#FB2B1D", "#CACACA"],
        cutout: "65%",
      },
    ],
  });
  const options = {
    maintainAspectRatio: false,
    radius: "80%",

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
          }}
        >
          Doughnut Chart
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
          Doughnut charts are excellent at showing the relational proportions
          between data.
        </Typography>
        <Box sx={{ width: 450, height: 400 }}>
          <Doughnut data={userData} options={options} />
        </Box>
      </Box>
    </Paper>
  );
}

export default DoughnutChart;
