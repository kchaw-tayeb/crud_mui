import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Paper } from "@mui/material";
import DetailsCompnay from "../DetailsCompnay";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listCompanyDetails } from "../../actions/companyActions";
import { useParams } from "react-router-dom";
import Temployers from "../Temployee";

// import Popup from "../utils/Popup";
// import AddFormEmployer from "../employeesForm/AddFormEmployer";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [openPopup, setOpenPopup] = useState(false);
  const hidePopup = () => {
    setOpenPopup(false);
  };
  const params = useParams();
  const id = params.id;
  const dispatch = useDispatch();
  const companyDetails = useSelector((state) => state.companyDetails);
  const { company } = companyDetails;

  useEffect(() => {
    dispatch(listCompanyDetails(id));
  }, [dispatch, openPopup]);

  return (
    <Box sx={{ borderRadius: "6px", borderColor: "text.primary" }}>
      <Paper elevation={0} sx={{ borderRadius: "6px", border: "3px" }}>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              sx={{
                "& .MuiTab-root": {
                  fontWeight: 600,
                  fontSize: "0.875rem",
                },
                "& .Mui-selected": {
                  color: "rgb(25, 118, 210)",
                },
              }}
            >
              <Tab label="DETAILS" {...a11yProps(0)} />
              <Tab label="EMPLOYEES" {...a11yProps(1)} />
            </Tabs>
          </Box>
          {/* <Box sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Typography
              variant="h5"
              component="span"
              gutterBottom
              sx={{
                fontWeight: 600,
                lineHeight: 1.25,
                mt: 1.5,
                ml: 7,
              }}
            >
              company details
            </Typography>
            <Tooltip title="Add a new employee" sx={{ ml: 100 }}>
              <IconButton
                color="default"
                aria-label="upload picture"
                component="span"
                onClick={() => setOpenPopup(true)}
              >
                <AddIcon />
              </IconButton>
            </Tooltip>
          </Grid>
        </Box> */}
          <Box sx={{ "& .MuiBox-root": { p: 0 } }}>
            <TabPanel value={value} index={0}>
              <DetailsCompnay company={company} />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Temployers id={id} />
            </TabPanel>
          </Box>
        </Box>
        {/* <Popup openPopup={openPopup} setOpenPopup={setOpenPopup}>
          <AddFormEmployer hidePopup={hidePopup} id={id} />
        </Popup> */}
      </Paper>
    </Box>
  );
}
