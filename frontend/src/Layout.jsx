import React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

import List from "@mui/material/List";

import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import Collapse from "@mui/material/Collapse";

import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import ListItemButton from "@mui/material/ListItemButton";

import InputBase from "@mui/material/InputBase";

import Badge from "@mui/material/Badge";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

import { useNavigate, useLocation } from "react-router-dom";

import Avatar from "@mui/material/Avatar";
import {
  Sliders,
  Layout as Layouts,
  Briefcase,
  ShoppingCart,
  CreditCard,
  CheckSquare,
  Calendar,
  Search,
} from "react-feather";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
const drawerWidth = 258;

const iconList = {
  color: "rgb(238, 238, 238)",
  fontSize: "20px",
  width: "20px",
  height: "20px",
  opacity: "0.5",
};
const textList = {
  padding: "0px 16px",
  fontSize: "13px",

  "& .MuiListItemText-primary": {
    color: "rgb(238, 238, 238)",
  },
};
const itemList = {
  padding: "12px 22px 12px 32px",
  fontSize: "13px",
  fontWeight: "14px",
  color: "rgb(238, 238, 238, 1)",
  opacity: 20,
};
const itemListActive = {
  padding: "12px 22px 12px 32px",
  fontSize: "13px",
  fontWeight: "14px",
  color: "rgb(238, 238, 238, 1)",
  opacity: 20,
  backgroundColor: "rgb(30, 41, 58)",
};

const expandLess = {
  color: "#eeeeee",
  fontSize: "20px",
  width: "20px",
  height: "20px",
  opacity: 0.5,
};
const expandMore = {
  color: "#eeeeee",
  fontSize: "20px",
  width: "20px",
  height: "20px",
  opacity: 0.5,
};
const collapse = {
  pl: 7,
  color: "rgba(238, 238, 238, 0.7)",
};
const collapseActive = {
  pl: 7,
  color: "rgb(238, 238, 238)",
  backgroundColor: "rgb(30, 41, 58)",
};

function Layout(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [openD, setOpenD] = React.useState(false);

  const handleClickD = () => {
    setOpenD(!openD);
  };
  const [openP, setOpenP] = React.useState(false);

  const handleClickP = () => {
    setOpenP(!openP);
  };
  const [openI, setOpenI] = React.useState(false);

  const handleClickI = () => {
    setOpenI(!openI);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const navigate = useNavigate();
  const location = useLocation();
  const drawer = (
    <div>
      <Toolbar
        sx={{
          backgroundColor: "rgb(35, 48, 68)",
          color: "rgb(238, 238, 238)",
          margin: "0",
          lineHeight: "1.57",
        }}
      >
        <Box
          sx={{
            display: "flex",
            fontSize: "1.0625rem",
            fontWeight: "500",
            paddingLeft: "24px",
            paddingRight: "24px",
            paddingBottom: "8px",
            paddingTop: "8px",
            justifyContent: "center",
          }}
        >
          <Box sx={{ marginLeft: "21px" }}>Material App</Box>
        </Box>
      </Toolbar>

      <List
        sx={{
          width: "100%",
          maxWidth: 360,

          color: "#e0e0e0eb",
          opacity: "1",

          "& .MuiListItemIcon-root": {
            color: "#e0e0e0eb",

            opacity: 0.5,
            minWidth: "20px",
            minHeight: "20px",
          },
          "& .MuiListItemText-root": {
            mt: 0,
            mb: 0,
            padding: "0px 16px",
            fontSize: "13px",

            "& .MuiSvgIcon-root": {
              color: "#eeeeee",
              fontSize: "20px",
              width: "20px",
              height: "20px",
              opacity: 0.5,
            },
          },
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <Typography
            variant="subtitle2"
            sx={{
              bgcolor: "#233042",
              color: "rgb(238, 238, 238)",
              opacity: "0.4",
              fontSize: "0.696429rem",
              padding: " 16px  28px 4px  ",
              height: "17.484",
              mt: 1.3,
            }}
          >
            PAGES
          </Typography>
        }
      >
        <ListItemButton
          onClick={handleClickD}
          sx={itemList}
          disableGutters={true}
        >
          <ListItemIcon>
            <Sliders size={20} color="#eeeeee" />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
          {openD ? (
            <ExpandLess sx={expandLess} />
          ) : (
            <ExpandMore sx={expandMore} />
          )}
        </ListItemButton>
        <Collapse in={openD} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={location.pathname == "/forms" ? collapseActive : collapse}
              onClick={() => navigate("/forms")}
            >
              <ListItemText primary="GridForms" />
            </ListItemButton>
          </List>
        </Collapse>
        <Collapse in={openD} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={location.pathname == "/controls" ? collapseActive : collapse}
              onClick={() => navigate("/controls")}
            >
              <ListItemText primary="Controls" />
            </ListItemButton>
          </List>
        </Collapse>
        <Collapse in={openD} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={location.pathname == "/grid" ? collapseActive : collapse}
              onClick={() => navigate("/grid")}
            >
              <ListItemText primary="Data grid" />
            </ListItemButton>
          </List>
        </Collapse>
        <Collapse in={openD} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={location.pathname == "/chart" ? collapseActive : collapse}
              onClick={() => navigate("/chart")}
            >
              <ListItemText primary="Charts" />
            </ListItemButton>
          </List>
        </Collapse>
        <Collapse in={openD} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={location.pathname == "/chip" ? collapseActive : collapse}
              onClick={() => navigate("/chip")}
            >
              <ListItemText primary="Chip" />
            </ListItemButton>
          </List>
        </Collapse>
        <Collapse in={openD} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={
                location.pathname == "/basic_grid" ? collapseActive : collapse
              }
              onClick={() => navigate("/basic_grid")}
            >
              <ListItemText primary="Basic Grid" />
            </ListItemButton>
          </List>
        </Collapse>
        <Collapse in={openD} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={location.pathname == "/feedback" ? collapseActive : collapse}
              onClick={() => navigate("/feedback")}
            >
              <ListItemText primary="Feed Back" />
            </ListItemButton>
          </List>
        </Collapse>
        <Collapse in={openD} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={
                location.pathname == "/navigation" ? collapseActive : collapse
              }
              onClick={() => navigate("/navigation")}
            >
              <ListItemText primary="Navigation" />
            </ListItemButton>
          </List>
        </Collapse>
        <Collapse in={openD} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={
                location.pathname == "/transfer_list"
                  ? collapseActive
                  : collapse
              }
              onClick={() => navigate("/transfer_list")}
            >
              <ListItemText primary="Transfert List" />
            </ListItemButton>
          </List>
        </Collapse>
        <Collapse in={openD} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={location.pathname == "/images" ? collapseActive : collapse}
              onClick={() => navigate("/images")}
            >
              <ListItemText primary="Images" />
            </ListItemButton>
          </List>
        </Collapse>
        <Collapse in={openD} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={location.pathname == "/dashboard" ? collapseActive : collapse}
              onClick={() => navigate("/dashboard")}
            >
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </List>
        </Collapse>
        <Collapse in={openD} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={location.pathname == "/uimages" ? collapseActive : collapse}
              onClick={() => navigate("/uimages")}
            >
              <ListItemText primary="Upload" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton
          sx={location.pathname == "/" ? itemListActive : itemList}
          onClick={() => navigate("/")}
        >
          <ListItemIcon>
            <Briefcase size={20} color="#eeeeee" />
          </ListItemIcon>
          <ListItemText primary="Companies" />
        </ListItemButton>
        <ListItemButton onClick={handleClickP} sx={itemList}>
          <ListItemIcon>
            <Layouts size={20} color="#eeeeee" />
          </ListItemIcon>
          <ListItemText primary="Pages" />
          {openP ? (
            <ExpandLess sx={expandLess} />
          ) : (
            <ExpandMore sx={expandMore} />
          )}
        </ListItemButton>
        <Collapse in={openP} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={collapse}>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </List>
        </Collapse>
        <Collapse in={openP} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={collapse}>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </List>
        </Collapse>
        <Collapse in={openP} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={collapse}>
              <ListItemText primary="Pricing" />
            </ListItemButton>
          </List>
        </Collapse>
        <Collapse in={openP} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={collapse}>
              <ListItemText primary="Chat" />
            </ListItemButton>
          </List>
        </Collapse>
        <Collapse in={openP} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={collapse}>
              <ListItemText primary="Blank Page" />
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton sx={itemList}>
          <ListItemIcon>
            <ShoppingCart size={20} color="#eeeeee" />
          </ListItemIcon>
          <ListItemText primary="Orders" />
        </ListItemButton>
        <ListItemButton onClick={handleClickI} sx={itemList}>
          <ListItemIcon>
            <CreditCard size={20} color="#eeeeee" />
          </ListItemIcon>
          <ListItemText primary="Invoices" />
          {openI ? (
            <ExpandLess sx={expandLess} />
          ) : (
            <ExpandMore sx={expandMore} />
          )}
        </ListItemButton>
        <Collapse in={openI} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={collapse}>
              <ListItemText primary="List" />
            </ListItemButton>
          </List>
        </Collapse>
        <Collapse in={openI} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={collapse}>
              <ListItemText primary="Detail" />
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton sx={itemList} onClick={() => navigate("/")}>
          <ListItemIcon>
            <CheckSquare size={20} color="#eeeeee" />
          </ListItemIcon>
          <ListItemText primary="Tasks" />
        </ListItemButton>
        <ListItemButton sx={itemList}>
          <ListItemIcon>
            <Calendar size={20} color="#eeeeee" />
          </ListItemIcon>
          <ListItemText primary="Calendar" />
        </ListItemButton>

        <ListItemButton sx={itemList} onClick={() => navigate("/")}>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="Companies" />
        </ListItemButton>
        <ListItemButton sx={itemList} onClick={() => navigate("/")}>
          <ListItemIcon>
            <CheckSquare size={20} color="#eeeeee" />
          </ListItemIcon>
          <ListItemText primary="Tasks" />
        </ListItemButton>
        <ListItemButton sx={itemList}>
          <ListItemIcon>
            <Calendar size={20} color="#eeeeee" />
          </ListItemIcon>
          <ListItemText primary="Calendar" />
        </ListItemButton>
        <ListItemButton sx={itemList} onClick={() => navigate("/")}>
          <ListItemIcon>
            <CheckSquare size={20} color="#eeeeee" />
          </ListItemIcon>
          <ListItemText primary="Tasks" />
        </ListItemButton>
        <ListItemButton sx={itemList}>
          <ListItemIcon>
            <Calendar size={20} color="#eeeeee" />
          </ListItemIcon>
          <ListItemText primary="Calendar" />
        </ListItemButton>
        <ListItemButton sx={itemList} onClick={() => navigate("/")}>
          <ListItemIcon>
            <CheckSquare size={20} color="#eeeeee" />
          </ListItemIcon>
          <ListItemText primary="Tasks" />
        </ListItemButton>
        <ListItemButton sx={itemList}>
          <ListItemIcon>
            <Calendar size={20} color="#eeeeee" />
          </ListItemIcon>
          <ListItemText primary="Calendar" />
        </ListItemButton>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  ////////////////////////////
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [anchorEll, setAnchorEll] = React.useState(null);
  const openl = Boolean(anchorEll);
  const handleClickl = (event) => {
    setAnchorEll(event.currentTarget);
  };
  const handleClosel = () => {
    setAnchorEll(null);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "#fff",
          "& .MuiIconButton-root": {
            padding: "12px",
          },
        }}
        elevation={0}
      >
        <Toolbar disableGutters={true} sx={{ pl: "12px", pr: "12px" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Box
            sx={{
              flexGrow: 1,

              "& .MuiInputBase-root": {
                mt: 0.5,
                pt: 0.5,
                pb: 1,
                pl: 1.75,
                pr: 1.5,
              },
              "& .MuiInputBase-input": {
                ml: 1.5,
                pt: "5px",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <InputBase
                placeholder="Search topics..."
                startAdornment={<Search size={26} color="#9e9e9e" />}
                sx={{
                  fontSize: "0.8rem",
                  "&:hover": {
                    backgroundColor: "#f2f2f2",
                  },
                  "& .MuiSvgIcon-root": {
                    marginRight: 1,
                  },
                }}
              ></InputBase>

              <Box
                sx={{
                  display: "flex",

                  flexDirection: "row",
                  justifyContent: "space-between",
                  "& .MuiIconButton-root": {
                    color: "#9e9e9e",
                  },
                }}
              >
                <IconButton>
                  <Badge badgeContent={3} color="primary">
                    <ChatBubbleOutlineIcon />
                  </Badge>
                </IconButton>
                <IconButton>
                  <Badge badgeContent={7} color="primary">
                    <NotificationsNoneIcon />
                  </Badge>
                </IconButton>
                <div>
                  <IconButton aria-haspopup="true" onClick={handleClickl}>
                    <Avatar
                      alt="English"
                      src="/images/us.png"
                      sx={{ width: 22, height: 22 }}
                    />
                  </IconButton>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEll}
                    open={openl}
                    onClose={handleClosel}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem onClick={handleClosel}>English</MenuItem>
                    <MenuItem onClick={handleClosel}>Frensh </MenuItem>
                    <MenuItem onClick={handleClosel}>German </MenuItem>
                    <MenuItem onClick={handleClosel}>Deutch </MenuItem>
                  </Menu>
                </div>
                <div>
                  <IconButton aria-haspopup="true" onClick={handleClick}>
                    <PowerSettingsNewIcon />
                  </IconButton>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>Sign out </MenuItem>
                  </Menu>
                </div>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
          bgcolor: "#233042",
        }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background: "#233042",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background: "#233042",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        sx={{
          display: "flex",

          flexDirection: "column",
          flexGrow: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
        position="relative"
      >
        <Box
          component="main"
          sx={{
            p: 6,

            backgroundColor: "#f7f9fc",
            minHeight: "90vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          {props.children}
        </Box>
        <Box sx={{ bottom: 0, position: "relative" }}>
          <AppBar
            position="relative"
            sx={{
              backgroundColor: "rgb(255, 255, 255)",
              color: "rgb(158, 158, 158)",
            }}
            elevation={0}
          >
            <Toolbar>
              <Box sx={{ mr: 1 }}>
                <Typography variant="body1">Support</Typography>
              </Box>
              <Box sx={{ ml: 1, mr: 1 }}>
                <Typography variant="body1">Help Center</Typography>
              </Box>
              <Box sx={{ ml: 1, mr: 1 }}>
                <Typography variant="body1">Privacy</Typography>
              </Box>
              <Box sx={{ ml: 1, mr: 1 }}>
                <Typography variant="body1">Terms of Service</Typography>
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
      </Box>
    </Box>
  );
}

Layout.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Layout;
