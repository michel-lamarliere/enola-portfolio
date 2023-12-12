import React, { useRef } from "react";
import { Review, SkeletonReview } from "features/reviews/components/Review";
import { useGetReviews } from "features/reviews/api/get";

import leftArrowIcon from "assets/icons/left-arrow-bubble.svg";

import classes from "features/reviews/components/Reviews/Reviews.module.scss";

const Reviews: React.FC = () => {
  const { data, isLoading } = useGetReviews();

  const reviewsRef = useRef<null | HTMLDivElement>(null);

  const leftButtonHandler = () => {
    if (reviewsRef.current) {
      reviewsRef.current.scrollBy({ left: -600, behavior: "smooth" });
    }
  };

  const rightButtonHandler = () => {
    if (reviewsRef.current) {
      reviewsRef.current.scrollBy({ left: 600, behavior: "smooth" });
    }
  };

  return (
    <div className={classes.wrapper}>
      <h3 className={classes.title}>
        Qui de mieux que mes clients, pour parler de mon travail ?
      </h3>
      <div className={classes["reviews-wrapper"]}>
        <button
          onClick={leftButtonHandler}
          className={`${classes["arrow-button"]} ${classes["arrow-button--left"]}`}
        >
          <img src={leftArrowIcon} alt={"Gauche"} />
        </button>
        <div className={classes.reviews} ref={reviewsRef}>
          {isLoading &&
            [...Array(5)].map((skeleton, index) => (
              <SkeletonReview key={index} />
            ))}
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
          className={`${classes["arrow-button"]} ${classes["arrow-button--right"]}`}
        >
          <img src={leftArrowIcon} alt={"Aller à droite"} />
        </button>
      </div>
    </div>
  );
};

export default Reviews;
