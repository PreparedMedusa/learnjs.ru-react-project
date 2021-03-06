import React from "react";
import Article from "./Article.js";

export default function ArticleList({ articles }) {
  const ArticleElem = articles.map(article => (
    <li key={article.id}>
      <Article article={article} />
    </li>
  ));
  return <ul>{ArticleElem}</ul>;
}
