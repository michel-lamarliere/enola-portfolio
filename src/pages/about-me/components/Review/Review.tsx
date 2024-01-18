import React from "react";
import ContentLoader from "react-content-loader";
import cn from "classnames";

import { ReviewType } from "pages/about-me/types/review";

import styles from "./Review.module.scss";

export const SkeletonReview = () => {
  return (
    <ContentLoader
      className={cn(styles.wrapper, styles.wrapper__skeleton)}
      speed={2}
      height={"100%"}
      backgroundColor="#F3F2F7"
      foregroundColor="rgba(255, 150, 214, 0.2)"
    >
      <rect className={styles.skeleton__client} rx="3" ry="3" />
      <rect className={styles.skeleton__text} rx="3" ry="3" />
      <rect className={styles.skeleton__person} rx="3" ry="3" />
      <rect className={styles.skeleton__image} rx="5" ry="5" />
      <rect className={styles.skeleton__url} rx="3" ry="3" />
    </ContentLoader>
  );
};

export const Review = ({
  client,
  review,
  name,
  image,
  projectUrl,
}: ReviewType) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.client}>{client}</div>
      <div className={styles.text}>{review}</div>
      <div className={styles.person}>{name}</div>
      <div className={styles.image}>
        <img className={styles.image_img} src={image} alt={client} />
      </div>
      <button className={styles.link}>
        <a
          className={styles.link_text}
          href={projectUrl}
          target={"_blank"}
          rel="noreferrer"
        >
          Voir le projet complet
        </a>
      </button>
    </div>
  );
};
