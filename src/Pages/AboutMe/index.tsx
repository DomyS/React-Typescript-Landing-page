import React from "react";
import createStyles from "@mui/styles/createStyles";
import makeStyles from "@mui/styles/makeStyles";
import { Theme, useTheme } from "@mui/material/styles";
import { Grid, Typography, Box, useMediaQuery } from "@mui/material";
import profilePhoto from "../../img/image.jpg";
import Button from "../../Components/Button";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../../Components/PageWrapper";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      position: "relative",
      marginTop: "30%",
      width: 450,
      [theme.breakpoints.down("sm")]: {
        justifyContent: "center",
        width: 330,
        marginTop: "40%",
      },
    },
    textWrapper: {
      width: 450,
      borderRadius: 5,
      backgroundColor: "rgba(62, 67, 102, 0.3)",
      [theme.breakpoints.down("sm")]: {
        width: 330,
      },
    },
    profilePhoto: {
      position: "relative",
      top: "-40px",
      right: "40px",
      borderRadius: 3,
      [theme.breakpoints.down("sm")]: {
        width: 150,
        left: "90px",
        top: "-100px",
        right: "0",
      },
    },
    imageWrapper: {
      height: "135px",
      [theme.breakpoints.down("sm")]: {
        height: "55px",
      },
    },
    heading5: {
      color: "#FF6347",
      marginTop: "20px",
      textAlign: "left",
      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
        fontSize: "1.25rem",
      },
    },
    heading6: {
      color: "#FFC65C",
      textAlign: "left",
      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
        fontSize: "1.1rem",
      },
    },
    subtitle1: {
      textAlign: "left",
      padding: "15px 20px",
      color: "white",
      [theme.breakpoints.down("sm")]: {
        padding: "10px",
        textAlign: "center",
        fontSize: "0.9rem",
      },
    },
  })
);

const AboutMe = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const theme = useTheme();
  const isMobileSize = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <PageWrapper>
      <Grid className={classes.container}>
        <Grid container item xs={12} className={classes.textWrapper}>
          <Grid item xs={4} className={classes.imageWrapper}>
            <img
              width="180px"
              src={profilePhoto}
              alt="profilePhoto"
              className={classes.profilePhoto}
            />
          </Grid>
          <Grid item xs={12} sm={8} mt={isMobileSize ? 0 : 8}>
            <Typography
              variant={isMobileSize ? "h6" : "h5"}
              gutterBottom
              className={classes.heading5}
            >
              Domante Stirbyte
            </Typography>
            <Typography
              variant={isMobileSize ? "subtitle1" : "h6"}
              className={classes.heading6}
            >
              Frontend Developer | Oslo
            </Typography>
          </Grid>
          <Grid>
            <Typography
              variant={isMobileSize ? "subtitle2" : "subtitle1"}
              className={classes.subtitle1}
            >
              I am passionate self-taugt frontend developer with a lot of energy
              for learning new things, open for cool new challenges and ideas.
            </Typography>
            <Typography
              variant={isMobileSize ? "subtitle2" : "subtitle1"}
              className={classes.subtitle1}
            >
              I consider myself hard-working, structured and a team player. In
              my free-time I enjoy playing volleyball, reading books and
              watching movies.
            </Typography>
            <Typography
              variant={isMobileSize ? "subtitle2" : "subtitle1"}
              className={classes.subtitle1}
            >
              Looking forward in working with passionate positive people.
            </Typography>
            <Box mb={8}>
              <Button onClick={() => navigate("/skills-experience")}>
                Check out my skills &#38; experience
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </PageWrapper>
  );
};

export default AboutMe;
