import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { LineData } from "./DataLine";

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
        borderColor: "black",
        borderWidth: 2,
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
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  return <Line data={userData} />;
}

export default LineChart;
