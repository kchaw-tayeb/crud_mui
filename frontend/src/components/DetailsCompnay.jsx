import React from "react";

import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

function DetailsCompnay({ company }) {
  return (
    <Paper elevation={0} sx={{ minWidth: 275 }}>
      <CardContent sx={{ mb: 0.1 }}>
        <Typography variant="body2" component={"span"}>
          Name : {company.name}
          <br />
          <br />
          Phone : {company.phone}
          <br />
          <br />
          Adresse : {company.adresse}
          <br />
          <br />
          Tva : {company.tva}
        </Typography>
      </CardContent>
    </Paper>
  );
}

export default DetailsCompnay;
