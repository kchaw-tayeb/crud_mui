import React from "react";

import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

function DetailsCompnay({ company }) {
  return (
    <Paper elevation={0} sx={{ minWidth: 275 }}>
      <CardContent sx={{ mb: 0.1 }}>
        <Typography variant="body2" component={"div"} sx={{ mt: 1 }}>
          Name : {company.name}
        </Typography>
        <Typography variant="body2" component={"div"} sx={{ mt: 1 }}>
          Phone : {company.phone}
        </Typography>

        <Typography variant="body2" component={"div"} sx={{ mt: 1 }}>
          Adresse : {company.adresse}
        </Typography>
        <Typography variant="body2" component={"div"} sx={{ mt: 1 }}>
          Tva : {company.tva}
        </Typography>
      </CardContent>
    </Paper>
  );
}

export default DetailsCompnay;
