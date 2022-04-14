import React from "react";
import AddFormCompany from "../components/companies/AddFormCompany";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

const AddCompany = () => {
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
        Add a new company
      </Typography>
      <Breadcrumbs aria-label="breadcrumb" sx={{ mt: 1 }}>
        <Link underline="hover" color="#376fd0" href="/">
          home
        </Link>

        <Typography color="rgba(0, 0, 0, 0.6)">add </Typography>
      </Breadcrumbs>
      <Divider sx={{ marginTop: "24px", marginBottom: "24px" }} />
      <AddFormCompany />
    </div>
  );
};

export default AddCompany;
