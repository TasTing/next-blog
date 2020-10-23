import React from "react";
import Moment from "react-moment";
import Image from "./image";
import { Grid, Avatar, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { getStrapiMedia } from "../lib/media";

const useStyles = makeStyles((theme) => ({
  avatar:{
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const BlogFooter = ({ author, publish, image }) => {
  const classes = useStyles()
  let avatar
  if (image){
    avatar = getStrapiMedia(image)
  }
  return (
    <Grid container>
      {image?
        <Grid item xs={2}>
          {image && (
            <Avatar alt="" src={avatar} className={classes.large} />
          )}
        </Grid>:null
      }

      <Grid item xs={10}>
        <Container>
          {author?
            <p>
              By {author}
            </p>:null
          }
          <p>
            <Moment format="MMM Do YYYY">{publish}</Moment>
          </p>
        </Container>
      </Grid>
    </Grid>
  );
};

export default BlogFooter;
