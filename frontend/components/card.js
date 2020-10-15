import React from "react";
import Link from "next/link";
import Image from "./image";
import BlogFooter from "./blogfooter";

const Card = ({ article }) => {
  return (
    <Link as={`/article/${article.slug}`} href="/article/[id]">
      <a className="uk-link-reset">
        <div className="uk-card uk-card-muted">
          <div className="uk-card-media-top">
            <Image image={article.image}/>
          </div>
          <div className="uk-card-body">
            <p id="category" className="uk-text-uppercase">
              {article.category.name}
            </p>
            <p id="title" className="uk-text-large">
              {article.title}
            </p>
            <BlogFooter author={article.author.name} publish={article.publishedAt} image={article.author.picture}/>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Card;
