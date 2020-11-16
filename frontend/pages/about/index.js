import React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { fetchAPI } from "../../lib/api";
import { Container } from "@material-ui/core";
import Intro from "../../components/intro";
import GithubProfile from "../../components/github";
import ContactForm from "../../components/contactform";

const About = ({ categories, global, homepage }) => {
  const seo = {};

  return (
    <Layout categories={categories} global={global}>
      <div className="uk-section">
        <Seo seo={seo}/>
        <Container>
          <Intro intro={homepage.intro}/>
          <GithubProfile/>
          <ContactForm/>
        </Container>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const categories = await fetchAPI("/categories");
  const homepage = await fetchAPI("/homepage");

  return {
    props: { categories, homepage },
    revalidate: 1
  };
}

export default About;