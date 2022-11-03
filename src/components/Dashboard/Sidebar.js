// import * as React from "react";
import React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
// import Divider from '@mui/material/Divider';
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Badge from "@mui/material/Badge";
import Paper from "@mui/material/Paper";
import Donut1 from "./Donut1";
import Donut2 from "./Donut2";
import Bar1 from "./Bar1";
import Bar2 from "./Bar2";
import StackedBar from "./StackedBar";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Profile from "./Profile";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { AccountCircle } from "@mui/icons-material";
import GridViewIcon from "@mui/icons-material/GridView";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import PieChartIcon from "@mui/icons-material/PieChart";
import CallMergeIcon from "@mui/icons-material/CallMerge";
import PhonelinkSetupIcon from "@mui/icons-material/PhonelinkSetup";
import StorefrontIcon from "@mui/icons-material/Storefront";
import InventoryIcon from "@mui/icons-material/Inventory";
import SummarizeIcon from "@mui/icons-material/Summarize";
import PublicIcon from "@mui/icons-material/Public";
import MonitorIcon from "@mui/icons-material/Monitor";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import FlagIcon from "@mui/icons-material/Flag";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: (theme.palette.mode = "rgb(213, 216, 222)"),
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "16rem",
  width: "20rem",
  marginLeft: "3rem",
  boxShadow: "2px 2px 1px rgba(145, 153, 153, 0.7)",
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    backgroundColor: "white",
    // chng
    width: "100%",
    // [theme.breakpoints.up("sm")]: {
    //   width: "15ch",
    //   "&:focus": {
    //     width: "25ch",
    //   },
    // },
  },
}));

const drawerWidth = 260;

function SidenavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div
      style={{
        backgroundColor: "#2C566D",
        height: "100vh",
        overflow: "hidden",
        borderRight: "solid 2px #2C66D",
      }}
    >
      {/* <Toolbar style={{backgroundColor:'primary'}}/> */}
      {/* <Divider /> */}
      <List style={{ paddingTop: "25%", overflow: "none", height: "90%" }}>
        {[
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <GridViewIcon />
            <span>Dashboard</span>
          </div>,
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <TagFacesIcon />
            <span>Registration</span>
          </div>,
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <MedicalServicesIcon />
            <span>Accussion</span>
          </div>,
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <PieChartIcon />
            <span>Operations</span>
          </div>,
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <CallMergeIcon />
            <span>User Management</span>
          </div>,
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <StorefrontIcon />
            <span>Center Management</span>
          </div>,
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <PhonelinkSetupIcon />
            <span>Test Management</span>
          </div>,
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <InventoryIcon />
            <span>Order Management</span>
          </div>,
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <SummarizeIcon />
            <span>Report Management</span>
          </div>,
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <InventoryIcon />
            <span>Inventory</span>
          </div>,
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <PublicIcon />
            <span>Finance</span>
          </div>,
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <MonitorIcon />
            <span>Monitor</span>
          </div>,
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <AnalyticsIcon />
            <span>Analytics</span>
          </div>,
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <SearchIcon />
            <span>Advance Search</span>
          </div>,
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <FlagIcon />
            <span>Activity log</span>
          </div>,
          // "Dashboard",
          // "Registration",
          // "Accussion",
          // "Operations",
          // "User Management",
          // "Centerr Managment",
          // "Test Management",
          // "Order Management",
          // "Report Management",
          // "Inventory",
          // "Finance",
          // "Monitor",
          // "Analytics",
          // "Advance Search",
          // "Activity log",
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              style={{
                backgroundColor: "#e6e8ed",
                borderBottom: "1px solid #2C566D",
                color: "#043752",
              }}
            >
              {/* <ListItemIcon> */}
              {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
              {/* </ListItemIcon> */}
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  const navigate = useNavigate();
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar style={{ backgroundColor: "#2C566D" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Search
            sx={{ display: { xs: "none", sm: "block" } }}
            style={{ color: "grey" }}
          >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              style={{ color: "grey" }}
              placeholder="Search Something.."
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {/* <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton> */}
            <IconButton
              size="large"
              aria-label="show 1 new notifications"
              color="inherit"
            >
              <Badge color="error">
                <CircleNotificationsIcon style={{ marginRight: "1rem" }} />
                {/* <AccountCircle /> */}
              </Badge>
            </IconButton>
            {/* <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              // aria-controls={menuId}
              aria-haspopup="true"
              // onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton> */}
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 1 new notifications"
              color="inherit"
            >
              <Badge color="error">
                <LogoutIcon
                  onClick={() => {
                    localStorage.removeItem("token");
                    navigate("/");
                  }}
                  style={{ marginRight: "1rem" }}
                />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {/* {renderMobileMenu}
      {renderMenu} */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
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
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)`, marginTop: "7%" },
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={2}
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              rowGap: "2rem",
              width: "100%",
              height: "100%",
              gap: "0% 0% 5% 0%",
            }}
          >
            <Grid item xs={12} md={6} lg={4}>
              <Item>
                <Donut1 />
              </Item>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Item>
                <Donut2 />
              </Item>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Item>
                <Bar1 />
              </Item>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Item>
                <StackedBar />
              </Item>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Item>
                <Profile />
              </Item>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Item>
                <Bar2 />
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

SidenavBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default SidenavBar;
