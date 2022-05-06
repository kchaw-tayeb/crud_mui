import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { BarData } from "./DataBar";
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
        borderColor: "black",
        borderWidth: 2,
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
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  return <Bar data={userData} />;
}

export default BarChart;
