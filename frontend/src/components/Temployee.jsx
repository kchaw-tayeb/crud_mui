import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState, useEffect } from "react";

import Box from "@mui/material/Box";

import Tooltip from "@mui/material/Tooltip";

import Popup from "../../src/components/utils/Popup";
import AddFormEmployee from "../components/employeesForm/AddFormEmployee";

import axios from "axios";

import Button from "@mui/material/Button";
import TableDeleteButtonEmployer from "../components/employeesForm/TableDeleteButtonEmployer";
import TableEditButtonEmployer from "../components/employeesForm/TableEditButtonEmployer";

export default function Temployee({ id }) {
  const [employers, setEmployers] = useState([]);
  const [deleteIE, setDeleteIE] = useState(false);
  const [editEmployer, setEditEmployer] = useState(false);

  const [openPopup, setOpenPopup] = useState(false);
  const hidePopup = () => {
    setOpenPopup(false);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get("/api/employees");
        setEmployers(response);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, [editEmployer, deleteIE, openPopup]);
  const employees = employers.filter((employee) => employee.company === id);
  ////////////////////////////////

  return (
    <Box sx={{ width: "100%", borderRadius: "6px", mb: 0.1 }}>
      <Paper elevation={0} sx={{ width: "100%" }}>
        <Tooltip title="Add a new company">
          <Button
            variant="contained"
            type="submit"
            onClick={() => setOpenPopup(true)}
            disableElevation
            sx={{ mt: 2, ml: 2 }}
          >
            Add new
          </Button>
        </Tooltip>
        <TableContainer component={Paper} elevation={0}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow
                sx={{ "& .MuiTableCell-root": { fontSize: "0.8125rem" } }}
              >
                <TableCell>First Name</TableCell>
                <TableCell align="left">Second Name</TableCell>
                <TableCell align="left">Phone</TableCell>
                <TableCell align="right">actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {employees.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    "& .MuiTableCell-root": {
                      fontSize: "0.8125rem",
                      fontWeight: 400,
                    },
                  }}
                >
                  <TableCell component="th" scope="row">
                    {row.firstName}
                  </TableCell>
                  <TableCell align="left">{row.secondName}</TableCell>
                  <TableCell align="left">{row.phone}</TableCell>

                  <TableCell align="right" padding="none" sx={{ pr: 0.5 }}>
                    <TableEditButtonEmployer
                      row={row}
                      setEditEmployer={setEditEmployer}
                      editEmployer={editEmployer}
                      id={id}
                    />
                    <TableDeleteButtonEmployer
                      row={row}
                      setDeleteIE={setDeleteIE}
                      deleteIE={deleteIE}
                      id={id}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <Popup openPopup={openPopup} setOpenPopup={setOpenPopup}>
        <AddFormEmployee hidePopup={hidePopup} id={id} />
      </Popup>
    </Box>
  );
}
