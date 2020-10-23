import React from "react";
import Card from "./card";
import { Grid, Toolbar, Paper, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  left:{
    padding:5,
  },
  right:{
    padding:5,
  },
}));

const Articles = ({ articles }) => {
  const classes = useStyles();
  const leftArticlesCount = Math.ceil(articles.length / 2);
  const leftArticles = articles.slice(0, leftArticlesCount);
  const rightArticles = articles.slice(leftArticlesCount, articles.length);
  return (
    <React.Fragment>
      <Grid container className={classes.list}>
        <Grid item xs={12} md={6}>
          {leftArticles.map((article, i) => {
            return (
              <Box key={`article__left__${article.slug}`} className={classes.left}>
                <Card article={article}/>
              </Box>
            );
          })}
        </Grid>
        <Grid item xs={12} md={6}>
          {rightArticles.map((article, i) => {
            return (
              <Box key={`article__right__${article.slug}`} className={classes.right}>
                <Card article={article}/>
              </Box>
            );
          })}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Articles;
