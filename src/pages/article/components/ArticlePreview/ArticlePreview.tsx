import React from "react";
import { Link } from "react-router-dom";

import { Article } from "pages/article/types/articles";
import { routes } from "config/routes";
import { ArticleTag } from "pages/article/components/ArticleTag";
import { Skeleton } from "libs/react-content-loader";

import styles from "./ArticlePreview.module.scss";

export const ArticlePreviewSkeleton = () => {
  return (
    <div className={styles.ArticlePreview}>
      <Skeleton className={styles.skeleton_image} />
      <Skeleton className={styles.skeleton_title} />
      <Skeleton className={styles.skeleton_description} />
      <Skeleton className={styles.skeleton_tag} />
    </div>
  );
};

export const ArticlePreview = ({
  id,
  slug,
  title,
  description,
  coverImage,
  tag,
}: Article) => {
  return (
    <Link
      className={styles.ArticlePreview}
      to={routes.article.url({
        id,
        slug,
      })}
    >
      <img className={styles.image} src={coverImage} alt={title} />
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
        <ArticleTag text={tag} />
      </div>
    </Link>
  );
};
