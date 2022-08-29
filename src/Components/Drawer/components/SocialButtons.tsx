import React from "react";
import { Grid, Link, Box } from "@mui/material";
import EmailIcon from "@mui/icons-material/MailOutline";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const SocialButtons = () => {
  return (
    <Box my={8}>
      <Grid item xs={12} container justifyContent="center" mt={5}>
        <Grid item xs={3}>
          <Link
            style={{ color: "white" }}
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/domante-stirbyte-07789b92"
          >
            <LinkedInIcon />
          </Link>
        </Grid>
        <Grid item xs={3} className="icon">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white" }}
            href="https://github.com/DomyS"
          >
            <GitHubIcon />
          </Link>
        </Grid>
        <Grid item xs={3} className="icon">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white" }}
            href="mailto:domante.stirbyte@gmail.com"
          >
            <EmailIcon />
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SocialButtons;
