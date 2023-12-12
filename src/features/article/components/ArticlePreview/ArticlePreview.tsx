import React from "react";
import ContentLoader from "react-content-loader";
import { Link } from "react-router-dom";

import { Article } from "features/article/types/articles";
import { routes } from "config/routes";

import styles from "./ArticlePreview.module.scss";

const Skeleton = ({ className }: { className: string }) => {
  return (
    <ContentLoader
      speed={2}
      width={"100%"}
      backgroundColor="#F3F2F7"
      foregroundColor="rgba(255, 150, 214, 0.2)"
      className={className}
    >
      <rect rx="3" ry="3" width={"100%"} height={"100%"} />
    </ContentLoader>
  );
};

export const ArticlePreviewSkeleton = () => {
  return (
    <div className={styles.ArticlePreview}>
      <Skeleton className={styles.skeleton_image} />
      <Skeleton className={styles.skeleton_title} />
      <Skeleton className={styles.skeleton_description} />
    </div>
  );
};

export const ArticlePreview = ({
  id,
  title,
  description,
  coverImage,
  date,
  paragraph,
}: Article) => {
  return (
    <Link className={styles.ArticlePreview} to={routes.article.url(id)}>
      <img className={styles.image} src={coverImage} alt={title} />
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
      </div>
    </Link>
  );
};
