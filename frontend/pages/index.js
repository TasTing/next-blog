import React from "react";
import Articles from "../components/articles";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Hero from "../components/hero";
import { fetchAPI } from "../lib/api";
import { Container } from "@material-ui/core";

const Home = ({ articles, categories, homepage }) => {
  return (
    <Layout categories={categories} title={homepage.hero.title}>
      <Seo seo={homepage.seo} />
      <div className="uk-section">
        <Container>
          <Hero hero={homepage.hero} />
          <Intro intro={homepage.intro} />
          <Articles articles={articles}/>
        </Container>
      </div>
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
