import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import TableCompany from "./screens/TableCompany";
import AddCompany from "./screens/AddCompany";
import EditCompany from "./screens/EditCompany";
import CompanyDetail from "./screens/CompanyDetail";
import Layout from "./Layout";
import Forms from "./screens/Forms";
import Controls from "./screens/Controls";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(55, 111, 208)",
    },
    secondary: {
      main: "#495057",
    },
    success: {
      main: "#5cb85c",
    },
    warning: {
      main: "#f0ad4e",
    },
    info: {
      main: "#5bc0de",
    },
  },
  typography: {
    fontFamily: "Inter",
    h1: {
      fontFamily: "Inter",
      fontWeight: 500,
      fontSize: "1.65rem",
      lineHeight: 1.2,
      color: "#495057",
    },
    h2: {
      fontFamily: "Inter",
      fontWeight: 500,
      fontSize: "1.44375rem",
      lineHeight: 1.2,
      color: "#495057",
    },
    h3: {
      fontFamily: "Inter",
      fontWeight: 600,
      fontSize: "1.5rem",
      lineHeight: 1.25,
      color: "#495057",
    },
    h4: {
      fontFamily: "Inter",
      fontWeight: 500,
      fontSize: "1.03125rem",
      lineHeight: 1.2,
      color: "#495057",
    },
    h5: {
      fontFamily: "Inter",
      fontWeight: 500,
      fontSize: "0.825rem",
      lineHeight: 1.2,
      color: "#495057",
    },
    h6: {
      fontFamily: "Inter",
      fontWeight: 500,
      fontSize: "1rem",
      lineHeight: 1.25,
      color: "#495057",
    },
    body1: {
      fontSize: "13px",
    },
    button: {
      fontFamily: "Inter",
      fontWeight: 500,
      fontSize: "0.8125rem",

      letterSpacing: "0.02857em",
      textTransform: "none",
      padding: "6px 16px",
      borderRadius: "4px",
      lineHeight: 1.75,
    },
  },
  shape: {
    borderRadius: "0.2rem",
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: "none",
      },
    },
  },
  props: {
    MuiButton: {
      disableRipple: true,
      variant: "contained",
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Routes>
            <Route exact path="/" element={<TableCompany />} />
            <Route exact path="/add" element={<AddCompany />} />
            <Route exact path="/edit/:id" element={<EditCompany />} />
            <Route exact path="/company/:id" element={<CompanyDetail />} />
            <Route exact path="/forms" element={<Forms />} />
            <Route exact path="/controls" element={<Controls />} />
          </Routes>
        </Layout>
      </Router>

      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
