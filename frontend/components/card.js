import React from "react";
import Link from "next/link";
import Image from "./image";
import BlogFooter from "./blogfooter";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Box, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    color:"black",
    textDecoration:"none",
  },
  down:{
    color:'black',
    padding:20,
    marginTop:10,
    marginBottom:10,
    '&:hover': {
      color:'blue',
    },
  },
  interact:{
    '&:hover': {
      textDecoration:"none",
    },
  }
}));

const Card = ({ article }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Link as={`/article/${article.slug}`} href="/article/[id]">
        <a className={classes.interact}>
          <div>
            <div>
              <Image image={article.image}/>
            </div>
            <div className={classes.down}>
              <Typography variant={"h6"} id="category" gutterBottom>
                {article.category.name}
              </Typography>
              <Typography variant={"h4"} id="title" gutterBottom>
                {article.title}
              </Typography>
              <BlogFooter author={article.author.name} publish={article.publishedAt} image={article.author.picture}/>
            </div>
          </div>
        </a>
      </Link>
    </Box>
  );
};

export default Card;
