import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { PieData } from "./DataPie";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function createData(source, revenue, value) {
  return { source, revenue, value };
}
const rows = [
  createData("Social", 260, 35),
  createData("Search Engines", 125, -12),
  createData("Direct", 262, 16.0, 24, 6.0),

  createData("Other", 146, 24),
];
function DoughnutChart({ chartData }) {
  const [userData, setUserData] = useState({
    labels: PieData.map((data) => data.media),
    datasets: [
      {
        label: "Media",
        data: PieData.map((data) => data.numbers),
        backgroundColor: ["#0569FF", "#FF9800", "#FB2B1D", "#CACACA"],
        cutout: "85%",
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
          Weekly sales
        </Typography>

        <Box sx={{ width: 200, height: 200, ml: 5 }}>
          <Doughnut data={userData} options={options} />
        </Box>

        <Table sx={{ mb: 3 }} aria-label="simple table" size="small">
          <TableHead>
            <TableRow>
              <TableCell>Source</TableCell>
              <TableCell align="right">Revenue</TableCell>
              <TableCell align="right">Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.source}>
                <TableCell component="th" scope="row">
                  {row.source}
                </TableCell>
                <TableCell align="right">{row.revenue}</TableCell>
                <TableCell align="right">{row.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Paper>
  );
}

export default DoughnutChart;
