import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listCompanies } from "../actions/companyActions";
import Box from "@mui/material/Box";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import { EditButton } from "../buttons/CompnayEditButton";
import CompanyDeleteButton from "../buttons/CompanyDeleteButton";
import { DetailsButton } from "../buttons/CompanyDetailsButton";
import Popup from "../../src/components/utils/Popup";
import AddFormEmployee from "../components/employeesForm/AddFormEmployee";
import { useParams } from "react-router-dom";
import axios from "axios";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import TableDeleteButtonEmployer from "../components/employeesForm/TableDeleteButtonEmployer";
import TableEditButtonEmployer from "../components/employeesForm/TableEditButtonEmployer";
const EnhancedTableToolbar = () => {
  //   const navigate = useNavigate();
  const [openPopup, setOpenPopup] = useState(false);
  const hidePopup = () => {
    setOpenPopup(false);
  };
  const params = useParams();
  const id = params.id;
  const open = openPopup ? false : true;

  return (
    <Toolbar
      sx={{
        pl: { sm: 1.6 },
        pr: { xs: 1, sm: 1 },
        minHeight: "30px",
      }}
      variant="dense"
    >
      <Typography
        sx={{ flex: "1 1 100%", mb: 0.1 }}
        variant="h6"
        id="tableTitle"
        component="div"
        color="black"
      >
        Employee List
      </Typography>
      <Tooltip title="Add a new company" sx={{ mr: 0.001 }}>
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
          //   onClick={() => navigate("/add")}
          onClick={() => setOpenPopup(true)}
        >
          <AddBoxOutlinedIcon />
        </IconButton>
      </Tooltip>
      <Popup openPopup={openPopup} setOpenPopup={setOpenPopup}>
        <AddFormEmployee hidePopup={hidePopup} id={id} />
      </Popup>
    </Toolbar>
  );
};

export default function Temployee({ id }) {
  /////////////////////////////
  // const dispatch = useDispatch();
  // const [deleteI, setDeleteI] = useState(false);
  // const companyList = useSelector((state) => state.companyList);
  // const { loading, error, companies } = companyList;
  // useEffect(() => {
  //   dispatch(listCompanies());
  // }, [dispatch, deleteI]);
  // const rows = companies;
  ////////////////////////////////
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
        {/* <EnhancedTableToolbar /> */}
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
                  {/* <TableCell align="left">{row.company}</TableCell> */}
                  <TableCell align="right" padding="none" sx={{ pr: 0.5 }}>
                    {/* <EditButton row={row} />
                    <CompanyDeleteButton row={row} setDeleteI={setDeleteI} /> */}
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
