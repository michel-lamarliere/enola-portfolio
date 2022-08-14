import React from "react";
import ContentLoader from "react-content-loader";

import classes from "./styles.module.scss";

interface Props {
  client: string;
  review: string;
  name: string;
  image: string;
  url: string;
  onLoad: any;
}

export const SkeletonReview: React.FC = () => {
  return (
    <ContentLoader
      className={`${classes.wrapper} ${classes["wrapper--skeleton"]}`}
      speed={2}
      height={"100%"}
      backgroundColor="#F3F2F7"
      foregroundColor="rgba(255, 150, 214, 0.2)"
    >
      <rect className={classes.skeleton__client} rx="3" ry="3" />
      <rect className={classes.skeleton__text} rx="3" ry="3" />
      <rect className={classes.skeleton__person} rx="3" ry="3" />
      <rect className={classes.skeleton__image} rx="5" ry="5" />
      <rect className={classes.skeleton__url} rx="3" ry="3" />
    </ContentLoader>
  );
};

const Review: React.FC<Props> = (props) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.client}>{props.client}</div>
      <div className={classes.text}>{props.review}</div>
      <div className={classes.person}>{props.name}</div>
      <div className={classes.image}>
        <img
          className={classes.image__img}
          src={props.image}
          alt={props.client}
          onLoad={props.onLoad}
        />
      </div>
      <div className={classes.link}>
        <a
          className={classes.link}
          href={props.url}
          target={"_blank"}
          rel="noreferrer"
        >
          Voir le profil complet
        </a>
      </div>
    </div>
  );
};

export default Review;
