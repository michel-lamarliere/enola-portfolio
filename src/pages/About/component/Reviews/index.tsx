import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

import { RootState } from "store/store";
import { ReviewType } from "store/reviews";

import Review, { SkeletonReview } from "./component/Review";

import leftArrowIcon from "assets/icons/left-arrow.svg";

import classes from "./styles.module.scss";

const Reviews: React.FC = () => {
  const reviewsState = useSelector((state: RootState) => state.reviews);

  const reviewsRef = useRef<null | HTMLDivElement>(null);

  const [imagesAreLoaded, setImagesAreLoaded] = useState(false);
  const [loadedImages, setLoadedImages] = useState(0);

  useEffect(() => {
    if (reviewsState.isEmpty || reviewsState.data.length === 0) {
      return;
    }

    if (loadedImages === reviewsState.data.length) {
      setImagesAreLoaded(true);
    }
  }, [reviewsState, loadedImages]);

  return (
    <div className={classes.wrapper}>
      <div className={classes.title}>Quelques avis clients</div>
      <div className={classes["reviews-wrapper"]}>
        <button
          onClick={() => {
            if (reviewsRef.current) {
              reviewsRef.current.scrollBy({ left: -400, behavior: "smooth" });
            }
          }}
          className={`${classes["arrow-button"]} ${classes["arrow-button--left"]}`}
        >
          <img src={leftArrowIcon} alt={"Gauche"} />
        </button>
        <div className={classes.reviews} ref={reviewsRef}>
          {!imagesAreLoaded &&
            [...Array(5)].map((skeleton, index) => (
              <SkeletonReview key={index} />
            ))}
          {reviewsState.data.map((review: ReviewType, index) => (
            <Review
              key={index}
              client={review.client}
              image={review.image}
              name={review.name}
              review={review.review}
              url={review.url}
              onLoad={() => setLoadedImages((prev) => prev + 1)}
            />
          ))}
        </div>
        <button
          onClick={() => {
            if (reviewsRef.current) {
              reviewsRef.current.scrollBy({ left: 400, behavior: "smooth" });
            }
          }}
          className={`${classes["arrow-button"]} ${classes["arrow-button--right"]}`}
        >
          <img src={leftArrowIcon} alt={"Aller à droite"} />
        </button>
      </div>
    </div>
  );
};

export default Reviews;
