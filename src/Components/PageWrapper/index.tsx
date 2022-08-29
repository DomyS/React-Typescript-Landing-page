import React, { useState, useEffect } from "react";
import createStyles from "@mui/styles/createStyles";
import makeStyles from "@mui/styles/makeStyles";
import { Theme, useTheme } from "@mui/material/styles";
import { Grid, LinearProgress, Grow } from "@mui/material";
import { YELLOW_COLOR, BRIGHT_ORANGE } from "../../utils/theme";
import logo from "../../img/logo1.png";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "&.MuiLinearProgress-colorPrimary:not(.MuiLinearProgress-buffer)": {
        backgroundColor: "#ffffff",
      },
      "& .MuiLinearProgress-colorPrimary": {
        background: "#ffffff",
      },
      "& .MuiLinearProgress-barColorPrimary": {
        background: `linear-gradient(to right, ${YELLOW_COLOR}, ${BRIGHT_ORANGE})`,
      },
    },
    container: {
      position: "relative",
      // marginTop: '10%',
      paddingLeft: "180px",
      [theme.breakpoints.down("sm")]: {
        marginTop: "-15%",
        paddingLeft: 0,
      },
    },
    colorPrimary: {
      background: "#ffffff",
    },
    barColorPrimary: {
      background: `linear-gradient(to right, ${YELLOW_COLOR}, ${BRIGHT_ORANGE})`,
    },
    contentWrapper: {
      position: "absolute",
      left: 0,
      backgroundColor: "rgba(45, 48, 71, 1)",
      height: "100%",
      width: "100%",
      zIndex: 1,
      paddingLeft: "180px",
      [theme.breakpoints.down("sm")]: {
        paddingLeft: "0",
      },
    },
    content: {
      top: "45%",
      left: "50%",
      position: "absolute",
      transform: "translate(-50%, -50%)",
      width: 700,
      paddingLeft: "180px",
      [theme.breakpoints.down("sm")]: {
        paddingLeft: "0",
        width: 330,
        top: "30%",
      },
    },
  })
);

interface PageWrapperProps {
  children: React.ReactElement<any, any>;
}

const PageWrapper = (props: PageWrapperProps) => {
  const { children } = props;
  const theme = useTheme();
  const classes = useStyles(theme);

  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          setLoading(false);
          return 100;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Grid>
      {loading && (
        <Grid className={classes.contentWrapper} container>
          <Grid className={classes.content}>
            <img width="120px" className="logo" src={logo} alt="logo" />
            <LinearProgress
              style={{ height: 10, borderRadius: 5 }}
              classes={{
                root: classes.root,
              }}
              variant="determinate"
              value={progress}
            />
          </Grid>
        </Grid>
      )}
      <Grid container className={classes.container} justifyContent="center">
        <Grow in={progress === 100}>{children}</Grow>
      </Grid>
    </Grid>
  );
};

export default PageWrapper;
