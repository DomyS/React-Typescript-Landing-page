import React, { useState } from "react";
import createStyles from "@mui/styles/createStyles";
import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";
import {
  Grid,
  SwipeableDrawer,
  AppBar,
  IconButton,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../img/logo1.png";
import SocialButtons from "./components/SocialButtons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      background: "#3E4366 !important",
      width: "180px",
      textAlign: "center",
    },
  })
);

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

interface DrawerProps {
  menu: React.ReactElement;
}

const Drawer = (props: DrawerProps) => {
  const { menu } = props;
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isTabletSize = useMediaQuery(theme.breakpoints.down("md"));

  const drawer = (
    <div>
      <SwipeableDrawer
        id="mobileDrawer"
        variant="permanent"
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        ModalProps={{
          keepMounted: true,
        }}
        classes={{ paper: classes.paper }}
      >
        <DrawerHeader style={{ justifyContent: "center" }}>
          <img width="120px" className="logo" src={logo} alt="logo" />
        </DrawerHeader>
        {/* mobile menu content  */}
        {menu}
        <SocialButtons />
      </SwipeableDrawer>
    </div>
  );

  const tabletDrawer = (
    <div>
      <SwipeableDrawer
        id="mobileDrawer"
        variant="temporary"
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        classes={{ paper: classes.paper }}
        ModalProps={{
          keepMounted: false,
        }}
        PaperProps={{ onClick: () => setTimeout(() => setOpen(false), 1000) }}
      >
        <DrawerHeader>
          <IconButton onClick={() => setOpen(!open)} style={{ color: "white" }}>
            {open === true ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        {/* mobile menu content  */}
        <Grid container justifyContent="center">
          <img width="120px" className="logo" src={logo} alt="logo" />
          {menu}
        </Grid>
        <SocialButtons />
      </SwipeableDrawer>
    </div>
  );

  return (
    <>
      {isTabletSize ? (
        <>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={() => setOpen(true)}
              style={{ color: "white", fontSize: "1.2rem", zIndex: "10" }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
          {tabletDrawer}
        </>
      ) : (
        <Grid
          container
          justifyContent="center"
          style={{ width: 180, background: "#3E4366" }}
        >
          <AppBar position="fixed" color="default">
            {drawer}
          </AppBar>
        </Grid>
      )}
    </>
  );
};

export default Drawer;
