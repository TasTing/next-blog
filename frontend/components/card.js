import React from "react";
import Link from "next/link";
import Image from "./image";
import BlogFooter from "./blogfooter";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    color:"black",
    textDecoration:'none',
  },
  category:{

  },
  down:{
    padding:20,
    marginTop:10,
    marginBottom:10,
  },
}));

const Card = ({ article }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Link as={`/article/${article.slug}`} href="/article/[id]">
        <a>
          <div>
            <div>
              <Image image={article.image}/>
            </div>
            <div className={classes.down}>
              <h6 id="category" className={classes.category}>
                {article.category.name}
              </h6>
              <h4 id="title">
                {article.title}
              </h4>
              <BlogFooter author={article.author.name} publish={article.publishedAt} image={article.author.picture}/>
            </div>
          </div>
        </a>
      </Link>
    </Box>
  );
};

export default Card;
