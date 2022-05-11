import React, { useState } from "react";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import DoughnutChart from "./DoughnutChart";
import PolarChart from "./PolarChart";
import { UserData } from "./Data";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

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
    // <div>
    //   <div>
    //     <BarChart />
    //   </div>
    //   <div>
    //     <LineChart />
    //   </div>
    //   <div>
    //     <PieChart />
    //   </div>
    //   <div>
    //     <DoughnutChart />
    //   </div>
    //   <div>
    //     <PolarChart />
    //   </div>
    // </div>
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <LineChart />
        </Grid>
        <Grid item xs={6}>
          <BarChart />
        </Grid>
        <Grid item xs={6}>
          <DoughnutChart />
        </Grid>
        <Grid item xs={6}>
          <PieChart />
        </Grid>

        <Grid item xs={6}>
          <PolarChart />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Charts;
