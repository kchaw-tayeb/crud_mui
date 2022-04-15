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

import Button from "@mui/material/Button";

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
  ////////////////////////////////
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
        <Paper elevation={0} sx={{ width: "100%", mb: 1, borderRadius: "6px" }}>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
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
              <TableHead>
                <TableRow
                  sx={{ "& .MuiTableCell-root": { fontSize: "0.8125rem" } }}
                >
                  <TableCell>Name</TableCell>
                  <TableCell align="left">Adresse</TableCell>
                  <TableCell align="left">phone</TableCell>
                  <TableCell align="left">Tva</TableCell>
                  <TableCell align="right">actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
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
        </Paper>
      </Box>
    </>
  );
}
