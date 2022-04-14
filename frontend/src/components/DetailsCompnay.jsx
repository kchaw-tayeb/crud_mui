import React from "react";

import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

function DetailsCompnay({ company }) {
  return (
    // <Box sx={{ width: "50%", padding: "40px" }}>
    //   <p>Name : ......................{company.name}</p>
    //   <br />
    //   <p>Phone : ...........{company.phone}</p>
    //   <br />
    //   <p>Adresse : ...................{company.adresse}</p>
    //   <br />
    //   <p>Tva : .............................. {company.tva}</p>
    // </Box>
    <Paper elevation={0} sx={{ minWidth: 275 }}>
      <CardContent sx={{ mb: 0.1 }}>
        {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {company.name} details
        </Typography> */}

        <Typography variant="body2">
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
