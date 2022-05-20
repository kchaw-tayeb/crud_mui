import React from "react";
import StatCards from "./StatCards";
import LineChart from "./LineChart";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import DoughnutChart from "./Doughnut";
import BarChart from "./BarChart";
import Table from "./Table";

const DefaultDashboard = () => {
  return (
    <div>
      <StatCards />
      <Box sx={{ flexGrow: 1, mt: 3 }}>
        <Grid container spacing={2} columnSpacing={{ xs: 3.5, md: 3.5 }}>
          <Grid item xs={8} md={8}>
            <LineChart />
          </Grid>
          <Grid item xs={4} md={4}>
            <DoughnutChart />
          </Grid>
        </Grid>
      </Box>
      <Box />
      <Box sx={{ flexGrow: 1, mt: 3 }}>
        <Grid container spacing={2} columnSpacing={{ xs: 3.5, md: 3.5 }}>
          <Grid item xs={4} md={4}>
            <BarChart />
          </Grid>
          <Grid item xs={8} md={8}>
            <Table />
          </Grid>
        </Grid>
      </Box>
      <Box />
    </div>
  );
};

export default DefaultDashboard;
