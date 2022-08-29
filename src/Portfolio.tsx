import React from "react";
import { Theme } from "@mui/material/styles";
import createStyles from "@mui/styles/createStyles";
import makeStyles from "@mui/styles/makeStyles";
import Particles from "./Particles";
import Drawer from "./Components/Drawer";
import AboutMe from "./Pages/AboutMe";
import SkillsExperience from "./Pages/SkillsExperience";
import Projects from "./Pages/Projects";
import { Route, NavLink, Routes } from "react-router-dom";
import { Grid } from "@mui/material";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      fontFamily: "Montserrat",
      textAlign: "center",
      height: "100%",
      width: "100%",
      background: "#2D3047",
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      zIndex: "-1",
    },
    menuLink: {
      color: "white",
      textDecoration: "none",
      marginTop: "40px",
      fontFamily: "Montserrat",
    },
    activeLink: {
      color: "#FFC65C",
      marginTop: "40px",
      textDecoration: "none",
      fontFamily: "Montserrat",
    },
    linkWrapper: {
      marginTop: "40px",
      [theme.breakpoints.down("sm")]: {
        marginTop: "0px",
      },
    },
  })
);

function Portfolio() {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: "#0d47a1",
          // backgroundImage: url(""),
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "50% 50%",
        }}
      >
        <Particles />
      </div>
      <Drawer
        menu={
          <Grid
            container
            direction="column"
            justifyContent="center"
            className={classes.linkWrapper}
          >
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.activeLink : classes.menuLink
              }
              to="/"
            >
              About me
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.activeLink : classes.menuLink
              }
              to="/skills-experience"
            >
              Skills &#38; Experience
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.activeLink : classes.menuLink
              }
              to="/projects"
            >
              Projects
            </NavLink>
          </Grid>
        }
      />
      <Grid container justifyContent="center">
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/skills-experience" element={<SkillsExperience />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Grid>
    </Grid>
  );
}

export default Portfolio;
