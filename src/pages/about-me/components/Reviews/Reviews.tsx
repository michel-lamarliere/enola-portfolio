import React, { useRef } from "react";
import cn from "classnames";

import { Review, SkeletonReview } from "pages/about-me/components/Review";
import { useGetReviews } from "pages/about-me/api/get";
import { Container } from "components/Container";

import leftArrowIcon from "assets/icons/left-arrow-bubble.svg";

import styles from "./Reviews.module.scss";

export const Reviews = () => {
  const { data, isLoading } = useGetReviews();

  const reviewsListRef = useRef<null | HTMLDivElement>(null);

  const leftButtonHandler = () => {
    if (reviewsListRef.current) {
      reviewsListRef.current.scrollBy({ left: -600, behavior: "smooth" });
    }
  };

  const rightButtonHandler = () => {
    if (reviewsListRef.current) {
      reviewsListRef.current.scrollBy({ left: 600, behavior: "smooth" });
    }
  };

  return (
    <div className={styles.Reviews}>
      <Container>
        <h3 className={styles.title}>
          Qui de mieux que mes clients, pour parler de mon travail ?
        </h3>
        <div className={styles.reviews}>
          <button
            onClick={leftButtonHandler}
            className={cn(styles.arrowButton, styles.arrowButton___left)}
          >
            <img src={leftArrowIcon} alt={"Aller à gauche"} />
          </button>
          <div className={styles.reviews_list} ref={reviewsListRef}>
            {isLoading &&
              [...Array(5)].map((_, index) => <SkeletonReview key={index} />)}
            {data?.map((review, index) => (
              <Review
                key={index}
                client={review.client}
                image={review.image}
                name={review.name}
                review={review.review}
                projectUrl={review.projectUrl}
              />
            ))}
          </div>
          <button
            onClick={rightButtonHandler}
            className={cn(styles.arrowButton, styles.arrowButton___right)}
          >
            <img src={leftArrowIcon} alt={"Aller à droite"} />
          </button>
        </div>
      </Container>
    </div>
  );
};
