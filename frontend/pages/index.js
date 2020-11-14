import React from "react";
import Articles from "../components/articles";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Hero from "../components/hero";
import { fetchAPI } from "../lib/api";
import {Container, Paper, Toolbar, Typography} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  main:{
    paddingTop:50,
    paddingBottom:50,
  }
}));

const Home = ({ articles, categories, homepage, global }) => {
  const classes = useStyles()
  return (
    <Layout categories={categories} global={global}>
      <Seo seo={homepage.seo} />
      <Paper className={classes.main}>
        <Container>
          <Hero hero={homepage.hero} />
          <Intro intro={homepage.intro}/>
          <Toolbar><Typography variant={"h4"}>My blogs</Typography></Toolbar>
          <Articles articles={articles}/>
        </Container>
      </Paper>
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [articles, categories, homepage] = await Promise.all([
    fetchAPI("/articles?status=published"),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
  ]);

  return {
    props: { articles, categories, homepage },
    revalidate: 1,
  };
}

export default Home;
