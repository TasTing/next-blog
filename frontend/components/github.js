import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  Box,
  Avatar,
  CircularProgress,
  Grid
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import ReactMarkdown from "react-markdown";

const useStyles = makeStyles({
  root: {
    width: "100%",
    background: "rgba(255,255,255,0.2)",
    marginBottom: 10
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 20
  },
  pos: {
    marginBottom: 12
  },
  avatar: {
    width: 200,
    height: 200
  },
  form: {}
});

export default function GithubProfile() {
  const classes = useStyles();
  const BASE_URL = "https://api.github.com/users/";
  const [user, setUser] = useState("tasting");
  const [profile = {
    login: String,
    bio: String,
    avatar_url: String,
    followers: String,
    followers_url: String,
    following: String,
    public_repos: String,
    html_url: String
  }, setProfile] = useState(null);

  useEffect(() => {
    if (!profile) {
      axios.get(BASE_URL + user)
        .then(res => {
          const profile = res.data;
          setProfile(profile);
        });
    }
  }, [user, profile]);

  const handleClick = (e) => {
    setUser(e);
  };

  if (profile) {
    return (
      <Box shadow={3}>
        <Card className={classes.root}>
          <CardContent>
            <Typography align={"left"} variant={"h5"}>
              My Github Profile:
            </Typography>
            <Avatar src={profile.avatar_url} className={classes.avatar}/>
            <Typography className={classes.title} variant={"h6"} gutterBottom>
              {profile.login}
            </Typography>
            <ReactMarkdown source={profile.bio} escapeHtml={false}/>
            <Grid container
                  direction="row"
                  justify="center"
                  alignItems="center">
              <Grid item md={4} xs={12}>
                <Typography variant={'caption'}>
                  Followers:{profile.followers}
                </Typography>
              </Grid>
              <Grid item md={4} xs={12}>
                <Typography variant={'caption'}>
                  Following:{profile.following}
                </Typography>
              </Grid>
              <Grid item md={4} xs={12}>
                <Typography variant={'caption'}>
                  Repository:{profile.public_repos}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Button size="small" href={profile.html_url}>Learn More</Button>
          </CardActions>
          {/*<form>*/}
          {/*    <TextField id="username" label="Other User?" onChange={handleOnChange}/>*/}
          {/*</form>*/}
        </Card>
      </Box>
    );
  } else {
    return (
      <CircularProgress/>
    );
  }
}

