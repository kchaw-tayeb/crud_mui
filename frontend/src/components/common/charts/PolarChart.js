import React, { useState } from "react";
import { PolarArea } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { PolarData } from "./DataPolar";
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
  return <PolarArea data={userData} />;
}

export default PolarChart;
