import React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import createStyles from "@mui/styles/createStyles";
import makeStyles from "@mui/styles/makeStyles";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import { BRIGHT_ORANGE, YELLOW_COLOR } from "../../../utils/theme";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    dateText: {
      color: YELLOW_COLOR,
      paddingTop: "8px",
    },
    rightSide: {
      borderLeft: `1px solid ${BRIGHT_ORANGE}`,
      borderBottom: `1px solid ${BRIGHT_ORANGE}`,
      padding: "0px 10px 10px 10px",
    },
    companyName: {
      color: YELLOW_COLOR,
      textAlign: "left",
    },
    jobTitle: {
      color: YELLOW_COLOR,
      textAlign: "left",
    },
    aquiredSkills: {
      color: "white",
      textAlign: "left",
    },
    leftSide: {
      borderBottom: `1px solid ${BRIGHT_ORANGE}`,
    },
  })
);

interface ExperienceItemProps {
  date: string;
  company: string;
  jobTitle: string;
  aquiredSkills: string;
}

const ExperienceItem = (props: ExperienceItemProps) => {
  const { date, company, jobTitle, aquiredSkills } = props;
  const classes = useStyles();
  const theme = useTheme();
  const isMobileSize = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container xs={12} justifyContent="center">
      <Grid item xs={3} className={classes.leftSide}>
        <Typography
          variant={isMobileSize ? "body2" : "body1"}
          className={classes.dateText}
        >
          {date}
        </Typography>
      </Grid>
      <Grid item xs={8} className={classes.rightSide}>
        <Typography
          variant={isMobileSize ? "body1" : "h6"}
          className={classes.companyName}
        >
          {company}
        </Typography>
        <Typography
          variant={isMobileSize ? "body2" : "body1"}
          gutterBottom
          className={classes.jobTitle}
        >
          {jobTitle}
        </Typography>
        <Typography variant="body2" className={classes.aquiredSkills}>
          {aquiredSkills}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ExperienceItem;
