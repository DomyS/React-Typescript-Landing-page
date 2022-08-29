import React from "react";
import createStyles from "@mui/styles/createStyles";
import makeStyles from "@mui/styles/makeStyles";
import { Button } from "@mui/material";
import { YELLOW_COLOR } from "../../utils/theme";

const useStyles = makeStyles(() =>
  createStyles({
    yellowButton: {
      background: YELLOW_COLOR,
      fontFamily: "Montserrat",
      fontWeight: 700,
      color: "#363A5B",
      "&:hover": {
        backgroundColor: YELLOW_COLOR,
      },
    },
    contained: {
      background: YELLOW_COLOR,
      fontWeight: 700,
      color: "#363A5B",
    },
  })
);

const MainButton = (props: any) => {
  const classes = useStyles();

  return (
    <Button
      className={classes.yellowButton}
      classes={{ root: classes.contained }}
      variant="contained"
      {...props}
    />
  );
};

export default MainButton;
