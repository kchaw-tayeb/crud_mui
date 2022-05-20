import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Chip from "@mui/material/Chip";

function createData(name, startDate, endDate, state, assignee) {
  return { name, startDate, endDate, state, assignee };
}
const rows = [
  createData(
    "Project Aurora",
    "01/01/2021",
    "31/06/2021",
    "Done",
    "James Dalton"
  ),
  createData(
    "Project Eagle",
    "01/01/2021",
    "31/06/2021",
    "In Progress",
    "Tracy Mack"
  ),
  createData(
    "Project Fireball",
    "01/01/2021",
    "31/06/2021",
    "Done",
    "Sallie Love"
  ),

  createData(
    "Project Omega",
    "01/01/2021",
    "31/06/2021",
    "Cancelled",
    "Glenda Jang"
  ),
  createData(
    "Project Yoda",
    "01/01/2021",
    "31/06/2021",
    "Done",
    "Raymond Ennis"
  ),
  createData(
    "Project Zulu",
    "01/01/2021",
    "31/06/2021",
    "Done",
    "Matthew Winters"
  ),
];

const Cchip = (state) => {
  switch (state) {
    case "Done":
      return (
        <Chip
          label="Done"
          size="small"
          sx={{
            color: "rgb(255, 255, 255)",
            backgroundColor: "#4CAF50",
            fontSize: "85%",

            borderRadius: "6px",
            marginLeft: "57px",
            height: "20x",

            "& .MuiChip-label": {
              pl: 1,
              pr: 1,
            },
            "& .MuiChip-root": {
              height: "20x",
            },
          }}
        />
      );
    case "In Progress":
      return (
        <Chip
          label="In Progress"
          size="small"
          sx={{
            color: "rgb(255, 255, 255)",
            backgroundColor: "#FF9800",
            fontSize: "85%",

            borderRadius: "6px",
            marginLeft: "57px",
            height: "20x",

            "& .MuiChip-label": {
              pl: 1,
              pr: 1,
            },
            "& .MuiChip-root": {
              height: "20x",
            },
          }}
        />
      );
    case "Cancelled":
      return (
        <Chip
          label="Cancelled"
          size="small"
          sx={{
            color: "rgb(255, 255, 255)",
            backgroundColor: "#EF5350",
            fontSize: "85%",

            borderRadius: "6px",
            marginLeft: "57px",
            height: "20x",

            "& .MuiChip-label": {
              pl: 1,
              pr: 1,
            },
            "& .MuiChip-root": {
              height: "20x",
            },
          }}
        />
      );
  }
};
const Tables = () => {
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
          Latest projects
        </Typography>

        <Table sx={{ mt: 1 }} aria-label="simple table" size="small">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="center">Start Date</TableCell>
              <TableCell align="center">End Date</TableCell>
              <TableCell align="center">State</TableCell>
              <TableCell>Assignee</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.source}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.startDate}</TableCell>
                <TableCell align="right">{row.endDate}</TableCell>
                <TableCell align="left">{Cchip(row.state)}</TableCell>
                <TableCell align="left">{row.assignee}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Paper>
  );
};

export default Tables;
