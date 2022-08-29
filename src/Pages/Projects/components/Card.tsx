import React from "react";
import createStyles from "@mui/styles/createStyles";
import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material/styles";
import { Paper, Typography, Box, Link } from "@mui/material";
import { BRIGHT_ORANGE, YELLOW_COLOR } from "../../../utils/theme";
import Button from "../../../Components/Button";

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
      // borderBottom: `1px solid ${BRIGHT_ORANGE}`
      backgroundColor: "rgba(62, 67, 102, 1)",
      marginBottom: "20px",
      height: "fit-content",
      borderRadius: 5,
      [theme.breakpoints.down("md")]: {
        marginLeft: "10px",
        marginRight: "10px",
      },
    },
  })
);

interface ProjectCardProps {
  projectTitle: string;
  projectPhoto: string;
  usedTech: string;
  projectUrl: string;
}

const ProjectCard = (props: ProjectCardProps) => {
  const { projectTitle, projectPhoto, usedTech, projectUrl } = props;
  const classes = useStyles();

  return (
    <Paper className={classes.leftSide}>
      <Box p={3}>
        <Typography
          variant="h6"
          gutterBottom
          style={{ color: YELLOW_COLOR, fontWeight: 600 }}
        >
          {projectTitle}
        </Typography>
        <img
          width="300px"
          height="220px"
          className="typescriptIcon"
          src={projectPhoto}
          alt="typescriptIcon"
          style={{ borderRadius: "5px" }}
        />

        <Typography
          variant="subtitle1"
          style={{ color: "white", marginTop: "5px", width: "300px" }}
        >
          Made with: {usedTech}
        </Typography>
        <Button style={{ margin: "10px 0px" }}>
          <Link
            style={{ color: "#2D3047", textDecoration: "none" }}
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </Link>
        </Button>
      </Box>
    </Paper>
  );
};

export default ProjectCard;
