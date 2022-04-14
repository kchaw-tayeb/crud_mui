import React from "react";
import EditFormCompany from "../components/companies/EditFormCompany";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

const EditCompany = () => {
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
        Edit a company
      </Typography>
      <Breadcrumbs aria-label="breadcrumb" sx={{ mt: 1 }}>
        <Link underline="hover" color="#376fd0" href="/">
          home
        </Link>

        <Typography color="rgba(0, 0, 0, 0.6)">edit </Typography>
      </Breadcrumbs>
      <Divider sx={{ marginTop: "24px", marginBottom: "24px" }} />
      <EditFormCompany />
    </div>
  );
};

export default EditCompany;
