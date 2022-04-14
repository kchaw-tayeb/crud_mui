import React from "react";

import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

import { useNavigate } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import TableCompanys from "../components/companies/TableCompany";

const TableCompany = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Typography
        variant="h3"
        component="div"
        gutterBottomsx={{
          margin: "0px 0px ",
          fontWeight: 600,
          lineHeight: 1.25,
          fontSize: "1.5 rem",
        }}
        color="black"
      >
        Simple Table
      </Typography>

      <Breadcrumbs aria-label="breadcrumb" sx={{ mt: 1 }}>
        <Link underline="hover" color="#376fd0" href="/">
          Home
        </Link>

        <Typography color="rgba(0, 0, 0, 0.6)">companies</Typography>
      </Breadcrumbs>
      <Divider sx={{ marginTop: "24px", marginBottom: "24px" }} />
      <TableCompanys />
    </div>
  );
};

export default TableCompany;
