import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import {fetchAPI} from "../../lib/api";
import Layout from "../../components/layout";
import Image from "../../components/image";
import Seo from "../../components/seo";
import {getStrapiMedia} from "../../lib/media";
import BlogFooter from "../../components/blogfooter";
import App from "../../components/Robot/App";
import React from "react";
import Intro from "../../components/intro";
import GithubProfile from "../../components/github";
import {YoutubePlayer} from "reactjs-media";
import ContactForm from "../../components/contactform";
import {Container} from "@material-ui/core";

// do nothing but to trigger the redeploy
const Index = ({ categories, global, homepage }) => {
    const seo = {};

    return (
        <Layout categories={categories} global={global}>
            <Seo seo={seo}/>
            <Container>
                <App/>
            </Container>
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
export default Index;
