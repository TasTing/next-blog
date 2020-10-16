import React from "react";
import { getStrapiMedia } from "../lib/media";
import Avatar from "@material-ui/core/Avatar";
import ReactMarkdown from "react-markdown";
import { Grid, Toolbar, Button, makeStyles } from "@material-ui/core";
import { Facebook, Linkedin } from "@trejgun/material-ui-icons-social-networks";

const avatarStyle = {
  width: 200,
  height: 200,
  top: "50%",
  left: "50%",
  marginRight: "-50%",
  transform: "translate(-50%, -50%)",
};

const useStyles = makeStyles(
  theme => ({
    button: {
      margin: theme.spacing(1),
    },
    icon: {
      marginRight: theme.spacing(1),
    },
  }),
  {name: "Demo"}
);

const Intro = ({ intro }) => {
  const image = getStrapiMedia(intro.image);
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item md={4} xs={12}>
        <Avatar alt="Ting" src={image} style={avatarStyle} />
        <Toolbar></Toolbar>
      </Grid>
      <Grid item md={8} xs={12}>
        <h2>A little about me</h2>
        <ReactMarkdown source={intro.intro} escapeHtml={false} />
        <Toolbar>
          <Button className={classes.button} variant={"outlined"} href={"https://www.facebook.com/tingting.huang.77582"}><Facebook /></Button>
          <Button className={classes.button} variant={"outlined"} href={"https://www.linkedin.com/in/tingting-huang-804212150/"}><Linkedin /></Button>
        </Toolbar>
      </Grid>
      <Toolbar></Toolbar>
    </Grid>
  );
};

export default Intro;
