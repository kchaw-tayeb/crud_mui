import React from "react";

import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { listEmployees } from "../../actions/employeeActions";
import { useState, useEffect } from "react";

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const columns = [
  // { field: "_id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "secondName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "phone",
    headerName: "Phone",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.secondName || ""}`,
  },
];

const GridData = () => {
  const dispatch = useDispatch();
  const employeesList = useSelector((state) => state.employeeList);
  const { loading, error, employees } = employeesList;
  useEffect(() => {
    dispatch(listEmployees());
  }, [dispatch]);
  const row = employees;
  console.log(row);
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        getRowId={(r) => r._id}
        rows={row}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default GridData;
