import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { PieData } from "./DataPie";
function DoughnutChart({ chartData }) {
  const [userData, setUserData] = useState({
    labels: PieData.map((data) => data.media),
    datasets: [
      {
        label: "Media",
        data: PieData.map((data) => data.numbers),
        backgroundColor: ["#0569FF", "#FF9800", "#FB2B1D", "#CACACA"],
      },
    ],
  });
  return <Doughnut data={userData} />;
}

export default DoughnutChart;
