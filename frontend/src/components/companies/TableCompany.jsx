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
import { listCompanies } from "../../actions/companyActions";
import Box from "@mui/material/Box";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";

import { useNavigate } from "react-router-dom";
import { EditButton } from "../../buttons/CompnayEditButton";
import CompanyDeleteButton from "../../buttons/CompanyDeleteButton";
import { DetailsButton } from "../../buttons/CompanyDetailsButton";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import Toggle from "../utils/Toggle";
import IconsDisplay from "../utils/IconsDisplay";
import { TablePagination, TableSortLabel } from "@mui/material";

import InputBase from "@mui/material/InputBase";
import { Search } from "react-feather";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { visuallyHidden } from "@mui/utils";
import EnhancedTableHead from "./UseTable";

export default function TableCompany() {
  /////////////////////////////
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [deleteI, setDeleteI] = useState(false);
  const companyList = useSelector((state) => state.companyList);
  const { loading, error, companies } = companyList;
  useEffect(() => {
    dispatch(listCompanies());
  }, [dispatch, deleteI]);
  const rows = companies;
  /////////////pagination///////////////////
  const [page, setPage] = React.useState(0);

  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  ////////////////////sorting/////////////////////
  const headCells = [
    { id: "name", label: "Name" },
    { id: "adresse", label: "Adresse" },
    { id: "phone", label: "phone" },
    { id: "tva", label: "Tva" },
    { id: "state", label: "State", disableSorting: true },
    { id: "chek", label: "Check", disableSorting: true },
    { id: "clear", label: "Clear", disableSorting: true },
    { id: "isenabled", label: "isEnabled", disableSorting: true },
    { id: "icons", label: "Icons", disableSorting: true },
    { id: "actions", label: "actions", disableSorting: true },
  ];
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("name");
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };
  const TblHead = (props) => {
    const handleSortRequest = (cellId) => {
      const isAsc = orderBy === cellId && order === "asc";
      setOrder(isAsc ? "desc" : "asc");
      setOrderBy(cellId);
    };

    return (
      <TableHead>
        <TableRow>
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              {headCell.disableSorting ? (
                headCell.label
              ) : (
                <TableSortLabel
                  active={orderBy === headCell.id}
                  direction={orderBy === headCell.id ? order : "asc"}
                  onClick={() => {
                    handleSortRequest(headCell.id);
                  }}
                >
                  {headCell.label}
                </TableSortLabel>
              )}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  };

  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);

    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }
  function descendingComparator(a, b, orderBy) {
    if (
      b[orderBy].toString().toLowerCase() < a[orderBy].toString().toLowerCase()
    ) {
      return -1;
    }
    if (
      b[orderBy].toString().toLowerCase() > a[orderBy].toString().toLowerCase()
    ) {
      return 1;
    }
    return 0;
  }

  function getComparator(order, orderBy) {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  ///////////////////////

  ////////////////////////search option ////////////
  const [option, setOption] = useState("name");

  const handleChange = (event) => {
    setOption(event.target.value);
  };
  console.log(option);
  ///////////////////////search/////////////////
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });
  const handleSearch = (e) => {
    let target = e.target;
    setFilterFn({
      fn: (items) => {
        if (target.value == "") return items;
        else
          return items.filter((x) =>
            x[option].toString().toLowerCase().includes(target.value)
          );
      },
    });
  };

  return (
    <>
      <Box
        sx={{
          borderRadius: "6px",

          borderColor: "text.primary",

          bgcolor: "background.paper",

          "& .MuiTableRow-root ": {
            borderTopLeftRadius: "6px",
            borderTopRightRadius: "6px",
          },
          "& .MuiTableRow-root ": {
            borderBottomLeftRadius: "6px",
            borderBottomRightRadius: "6px",
          },
        }}
      >
        {/* <Paper elevation={0} sx={{ width: "100%", mb: 1, borderRadius: "6px" }}> */}
        <Paper elevation={0} sx={{ width: "100%", mb: 1 }}>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            {" "}
            <Typography
              variant="h6"
              sx={{
                fontSize: "1rem",
                fontWeight: 500,
                lineHeight: 1.25,
                color: "black",
                justifyContent: "flex-start",

                mt: 2,
                ml: 2,
              }}
            >
              Formik
            </Typography>
            <Box>
              <FormControl sx={{ mt: 1 }}>
                <InputLabel id="demo-simple-select-label">Option</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={option}
                  label="option"
                  onChange={handleChange}
                >
                  <MenuItem value={"name"}>name</MenuItem>
                  <MenuItem value={"adresse"}>adresse</MenuItem>
                  <MenuItem value={"phone"}>phone</MenuItem>
                  <MenuItem value={"tva"}>tva</MenuItem>
                </Select>
              </FormControl>
              <InputBase
                placeholder="Search topics..."
                startAdornment={<Search size={26} color="#9e9e9e" />}
                onChange={handleSearch}
                sx={{
                  fontSize: "0.8rem",

                  "& .MuiSvgIcon-root": {
                    marginRight: 1,
                  },
                  ml: 3,
                  mt: 3,
                }}
              ></InputBase>
            </Box>
            <Tooltip
              title="Add a new company"
              sx={{ justifyContent: "flex-end", m: 0.8 }}
            >
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
                onClick={() => navigate("/add")}
              >
                <AddBoxOutlinedIcon />
              </IconButton>
            </Tooltip>
          </Box>

          <Tooltip title="Add a new company">
            <Button
              variant="contained"
              type="submit"
              onClick={() => navigate("/add")}
              disableElevation
              sx={{ ml: 2 }}
            >
              Add new
            </Button>
          </Tooltip>

          <TableContainer component={Paper} elevation={0}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              {/* <TableHead>
                <TableRow
                  sx={{ "& .MuiTableCell-root": { fontSize: "0.8125rem" } }}
                >
                  <TableCell>Name</TableCell>
                  <TableCell align="left">Adresse</TableCell>
                  <TableCell align="left">phone</TableCell>
                  <TableCell align="left">Tva</TableCell>
                  <TableCell align="left">State</TableCell>
                  <TableCell align="left">Check</TableCell>
                  <TableCell align="left">Clear</TableCell>
                  <TableCell align="left">isEnabled</TableCell>
                  <TableCell align="left">Icons</TableCell>
                  <TableCell align="right">actions</TableCell>
                </TableRow>
              </TableHead> */}

              <TblHead />
              <TableBody>
                {stableSort(filterFn.fn(rows), getComparator(order, orderBy))
                  .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
                  // {rows
                  //   .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
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
                        {row.name}
                      </TableCell>
                      <TableCell align="left">{row.adresse}</TableCell>
                      <TableCell align="left">{row.phone}</TableCell>
                      <TableCell align="left">{row.tva}</TableCell>
                      <TableCell align="left">
                        <Chip
                          label="Chip Outlined"
                          variant="filled"
                          color="primary"
                        />
                      </TableCell>
                      <TableCell align="left">
                        <CheckIcon />
                      </TableCell>
                      <TableCell align="left">
                        <ClearIcon />
                      </TableCell>
                      <TableCell align="left">
                        <Toggle />
                      </TableCell>
                      <TableCell align="left">
                        <IconsDisplay />
                      </TableCell>

                      <TableCell align="right" padding="none" sx={{ pr: 1 }}>
                        <EditButton row={row} />
                        <CompanyDeleteButton
                          row={row}
                          setDeleteI={setDeleteI}
                          deleteI={deleteI}
                        />
                        <DetailsButton row={row} />
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>
    </>
  );
}
