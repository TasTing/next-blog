import React from "react";
import { getStrapiMedia } from "../lib/media";
import Avatar from "@material-ui/core/Avatar";
import ReactMarkdown from "react-markdown";
import { Grid, Toolbar } from "@material-ui/core";

const avatarStyle = {
  width: 200,
  height: 200,
  top: "50%",
  left: "50%",
  marginRight: "-50%",
  transform: "translate(-50%, -50%)",
};

const Intro = ({ intro }) => {
  const image = getStrapiMedia(intro.image);
  return (
    <Grid container>
      <Grid item md={4} xs={12}>
        <Avatar alt="Ting" src={image} style={avatarStyle} />
        <Toolbar></Toolbar>
      </Grid>
      <Grid item md={8} xs={12}>
        <h2>A little about me</h2>
        <ReactMarkdown source={intro.intro} escapeHtml={false} />
      </Grid>
      <Toolbar></Toolbar>
    </Grid>
  );
};

export default Intro;
