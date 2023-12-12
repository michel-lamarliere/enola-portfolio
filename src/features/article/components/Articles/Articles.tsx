import React from "react";

import {
  ArticlePreview,
  ArticlePreviewSkeleton,
} from "features/article/components/ArticlePreview";
import { useGetArticles } from "features/article/api/getArticles";

import styles from "./Articles.module.scss";

type Props = {
  limit?: number;
};

export const Articles = ({ limit }: Props) => {
  const { data, isLoading, isError } = useGetArticles();

  if (isError) {
    return <></>;
  }

  return (
    <div className={styles.Articles}>
      {isLoading &&
        Array(6)
          .fill(0)
          .map((_, index) => <ArticlePreviewSkeleton />)}
      {data?.slice(0, limit).map((article) => (
        <ArticlePreview
          key={`article-${article.id}`}
          title={article.title}
          id={article.id}
          description={article.description}
          coverImage={article.coverImage}
          date={article.date}
          paragraph={article.paragraph}
        />
      ))}
    </div>
  );
};
