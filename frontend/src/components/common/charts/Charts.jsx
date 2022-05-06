import React, { useState } from "react";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import DoughnutChart from "./DoughnutChart";
import PolarChart from "./PolarChart";
import { UserData } from "./Data";

const Charts = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  return (
    <div>
      <div style={{ width: 700 }}>
        <BarChart />
      </div>
      <div style={{ width: 700 }}>
        <LineChart />
      </div>
      <div style={{ width: 300 }}>
        <PieChart />
      </div>
      <div style={{ width: 300 }}>
        <DoughnutChart />
      </div>
      <div style={{ width: 300 }}>
        <PolarChart />
      </div>
    </div>
  );
};

export default Charts;
