import React, { useRef } from "react";
import { useSelector } from "react-redux";

import { RootState } from "store/store";
import { Review } from "store/reviews";

import leftArrowIcon from "assets/icons/left-arrow.svg";

import classes from "./styles.module.scss";

const Reviews: React.FC = () => {
  const reviews = useSelector((state: RootState) => state.reviews);

  const reviewsRef = useRef<null | HTMLDivElement>(null);

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
          {!reviews.isEmpty &&
            reviews.data.map((review: Review, index) => (
              <div className={classes.reviews__item} key={index}>
                <div className={classes.reviews__item__client}>
                  {review.client}
                </div>
                <div className={classes.reviews__item__text}>
                  {review.review}
                </div>
                <div className={classes.reviews__item__person}>
                  {review.name}
                </div>
                <img
                  className={classes.reviews__item__image}
                  src={`${process.env.REACT_APP_BACKEND_URL}${review.image}`}
                  alt={"recap projet"}
                />
                <div className={classes.reviews__item__link}>
                  <a
                    className={classes.reviews__item__link}
                    href={review.url}
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    Voir le profil complet
                  </a>
                </div>
              </div>
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
