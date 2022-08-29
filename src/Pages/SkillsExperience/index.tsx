import React from "react";
import createStyles from "@mui/styles/createStyles";
import makeStyles from "@mui/styles/makeStyles";
import { useTheme, Theme } from "@mui/material/styles";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import ExperienceItem from "./components/ExperienceItem";
import { BRIGHT_ORANGE } from "../../utils/theme";
import ReactIcon from "../../img/reactLogoWithName.png";
import TypescriptIcon from "../../img/typescript.png";
import HtmlLogo from "../../img/htmlLogo.png";
import CssLogo from "../../img/cssLogo.png";
import JavascriptIcon from "../../img/javascript.png";
import WordpressIcon from "../../img/Wordpress_Blue_logo.png";
import Redux from "../../img/reduxWhite.png";
import Storybook from "../../img/storybookWhite.png";
import PageWrapper from "../../Components/PageWrapper";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: { position: "relative", marginTop: "10%" },
    experienceWrapper: {
      backgroundColor: "rgba(62, 67, 102, 0.3)",
      height: "fit-content",
      borderRadius: 5,
    },
    skillsWrapper: {
      backgroundColor: "rgba(62, 67, 102, 0.3)",
      borderRadius: 5,
    },
    experienceText: {
      color: BRIGHT_ORANGE,
      marginTop: "10px",
    },
    skillsText: {
      color: BRIGHT_ORANGE,
      marginTop: "10px",
    },
    experienceItemWrapper: {
      margin: "20px 0px 40px 0px",
    },
    images: {
      padding: "25px",
      [theme.breakpoints.down("sm")]: {
        padding: "15px",
      },
    },
  })
);

const experienceData = [
  {
    date: "2022 April - currently",
    company: "Factiverse",
    jobTitle: "Frontend Developer (part-time)",
    aquiredSkills:
      "Component creation for Storybook with React, Material-UI, Typescript. Also some testing with React Testing Library",
  },
  {
    date: "2020 Aug - currently",
    company: "D-Fetch",
    jobTitle: "Frontend Developer",
    aquiredSkills:
      "Component creation with React, Material-UI, Typescript, React Hooks, D3.js.",
  },
  {
    date: "2019 May - 2019 Nov",
    company: "Sci-Code",
    jobTitle: "Frontend Developer (internship)",
    aquiredSkills:
      "React & Redux Course, Atomic Design course, Component creation, StorybookJs",
  },
];

const imagesData = [
  {
    width: "90px",
    mobileWidth: "50px",
    mobileHeight: "50px",
    url: HtmlLogo,
    alt: "html",
  },
  {
    width: "65px",
    mobileWidth: "40px",
    mobileHeight: "50px",
    url: CssLogo,
    alt: "css",
  },
  {
    width: "80px",
    height: "80px",
    mobileWidth: "50px",
    mobileHeight: "50px",
    url: JavascriptIcon,
    alt: "javascript",
  },
  {
    width: "120px",
    height: "40px",
    mobileWidth: "80px",
    mobileHeight: "30px",
    url: ReactIcon,
    alt: "react",
  },
  {
    width: "160px",
    height: "50px",
    mobileWidth: "120px",
    mobileHeight: "40px",
    url: TypescriptIcon,
    alt: "typescript",
  },
  {
    width: "60px",
    height: "60px",
    mobileWidth: "50px",
    mobileHeight: "50px",
    url: WordpressIcon,
    alt: "wordpress",
  },
  {
    width: "120px",
    height: "55px",
    mobileWidth: "100px",
    mobileHeight: "40px",
    url: Redux,
    alt: "redux",
  },
  {
    width: "120px",
    height: "25px",
    mobileWidth: "90px",
    mobileHeight: "20px",
    url: Storybook,
    alt: "storybook",
  },
];

const SkillsExperience = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobileSize = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <PageWrapper>
      <Grid
        container
        justifyContent="space-evenly"
        className={classes.container}
      >
        <Grid
          item
          xs={12}
          md={6}
          className={classes.experienceWrapper}
          m={isMobileSize ? 5 : 0}
        >
          <Typography
            variant={isMobileSize ? "h6" : "h5"}
            className={classes.experienceText}
          >
            Experience
          </Typography>
          <Grid className={classes.experienceItemWrapper}>
            {experienceData.map((e) => (
              <ExperienceItem
                date={e.date}
                company={e.company}
                jobTitle={e.jobTitle}
                aquiredSkills={e.aquiredSkills}
              />
            ))}
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          className={classes.skillsWrapper}
          m={isMobileSize ? 5 : 0}
        >
          <Typography
            gutterBottom
            variant={isMobileSize ? "h6" : "h5"}
            className={classes.skillsText}
          >
            Skills
          </Typography>
          <Grid container flexWrap="wrap">
            {imagesData.map((image, i) => (
              <img
                key={i}
                width={isMobileSize ? image.mobileWidth : image.width}
                height={isMobileSize ? image.mobileHeight : image.height}
                src={image.url}
                alt={image.alt}
                className={classes.images}
              />
            ))}
          </Grid>
        </Grid>
      </Grid>
    </PageWrapper>
  );
};

export default SkillsExperience;
