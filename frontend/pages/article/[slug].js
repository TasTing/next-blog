import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { fetchAPI } from "../../lib/api";
import Layout from "../../components/layout";
import Image from "../../components/image";
import Seo from "../../components/seo";
import { getStrapiMedia } from "../../lib/media";
import BlogFooter from "../../components/blogfooter";

const Article = ({ article, categories, homepage, global }) => {
  const imageUrl = getStrapiMedia(article.image);
  const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.image,
    article: true
  };

  return (
    <Layout categories={categories} global={global}>
      <Seo seo={seo}/>
      <div
        id="banner"
        className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
        style={{
          backgroundColor: "grey",
          backgroundBlendMode: "screen"
        }}
        data-src={imageUrl}
        data-srcset={imageUrl}
        data-uk-img
      >
        <h1 style={{fontSize:80,color:"black"}}>{article.title}</h1>
      </div>
      <div className="uk-section">
        <div className="uk-container uk-container-small">
          <ReactMarkdown source={article.content} escapeHtml={false}/>
          <hr className="uk-divider-small"/>
          <BlogFooter author={article.author.name} publish={article.publishedAt} image={article.author.picture}/>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const articles = await fetchAPI("/articles");
  return {
    paths: articles.map((article) => ({
      params: {
        slug: article.slug
      }
    })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const [articles, homepage, categories] = await Promise.all([
    fetchAPI(
      `/articles?slug=${params.slug}&status=published`
    ),
    fetchAPI("/homepage"),
    fetchAPI("/categories"),
  ]);

  return {
    props: { article: articles[0], homepage, categories },
    revalidate: 1
  };
}

export default Article;
