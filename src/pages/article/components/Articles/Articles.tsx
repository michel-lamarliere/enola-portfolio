import React from "react";

import {
  ArticlePreview,
  ArticlePreviewSkeleton,
} from "pages/article/components/ArticlePreview";
import { useGetArticles } from "pages/blog/api/getArticles";

import styles from "pages/article/components/Articles/Articles.module.scss";

type Props = {
  limit?: number;
};

export const Articles = ({ limit }: Props) => {
  const { data, isLoading, isError } = useGetArticles();

  if (isError) return <></>;

  return (
    <div className={styles.Articles}>
      <div className={styles.content}>
        {isLoading &&
          Array(6)
            .fill(0)
            .map((_, index) => <ArticlePreviewSkeleton />)}
        {data?.slice(0, limit).map((article) => (
          <ArticlePreview key={`article-${article.id}`} {...article} />
        ))}
      </div>
    </div>
  );
};
