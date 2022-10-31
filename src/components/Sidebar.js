import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
// import { height, width } from '@mui/system';
import Donut1 from "./Donut1";
import Donut2 from "./Donut2";
import Bar1 from "./Bar1";
import { NotificationAddOutlined } from "@mui/icons-material";
import { AccountCircle } from "@mui/icons-material";
import Bar2 from "./Bar2";
import Bar3 from "./Bar3";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: (theme.palette.mode = "rgb(213, 216, 222)"),
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "16rem",
  width: "20rem",
}));
const drawerWidth = 240;
function SidenavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <div>
      <Toolbar style={{ backgroundColor: "#043752" }} />
      <Divider />
      <List>
        {[
          "Inbox",
          "Starred",
          "Send email",
          "Drafts",
          "All mail",
          "Trash",
          "Spam",
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        style={{ backgroundColor: "#043752" }}
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography> */}
          <input style={{ width: "300px" }} placeholder="Search" />
          <NotificationAddOutlined style={{ marginLeft: "70rem" }} />
          <AccountCircle
            style={({ marginLeft: "15rem" }, { color: "white" })}
          />
        </Toolbar>
      </AppBar>
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
          width: { sm: `calc(100% - ${drawerWidth}px)`, marginTop: "2.5rem" },
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={12}
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              width: "87vw",
              height: "100vh",
            }}
          >
            <Grid item xs={4}>
              <Item>
                <Donut1 />
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <Donut2 />
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <Bar1 />
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <Bar2 />
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>xs=4</Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <Bar3 />
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
