import React from "react";

import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
// import { useDispatch, useSelector } from "react-redux";
// import { listEmployees } from "../../actions/employeeActions";
import { useState, useEffect } from "react";
import axios from "axios";

const columns = [
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
    width: 200,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.secondName || ""}`,
  },
];

const GridData = () => {
  /////////redux implementation//////
  // const dispatch = useDispatch();
  // const employeesList = useSelector((state) => state.employeeList);
  // const { loading, error, employees } = employeesList;
  // useEffect(() => {
  //   dispatch(listEmployees());
  // }, [dispatch]);
  // const row = employees;
  // console.log(row);
  ////////////////////////
  const [row, setRow] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get("/api/employees");
        setRow(response);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);
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
