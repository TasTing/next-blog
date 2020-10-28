import React, { useEffect, useState } from "react";
import axios from "axios";
import GitHubIcon from '@material-ui/icons/GitHub';
import { Box, ButtonGroup, Typography, Button, CircularProgress } from "@material-ui/core";

const Stargazer = () => {
  const BASE_URL = "https://api.github.com/repos/TasTing/next-blog";
  const [star,setStar] = useState(null)

  useEffect(() => {
    if (!star) {
      axios.get(BASE_URL)
        .then(res => {
          const star = res.data;
          setStar(star);
        });
    }
  }, );
  if(star){
    return (
      <div>
        <ButtonGroup>
          <Button variant={"contained"} color="primary" startIcon={<GitHubIcon/>} href={star.html_url}>
            Star
          </Button>
          <Button vartian={"contained"} color="primary" href={star.html_url}>
            {star.stargazers_count}
          </Button>
        </ButtonGroup>
      </div>
    )
  } else {
    return (
      <CircularProgress/>
    );
  }
}

export default Stargazer