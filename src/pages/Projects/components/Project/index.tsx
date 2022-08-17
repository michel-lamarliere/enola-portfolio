import React, { useEffect, useRef, useState } from "react";
import ContentLoader from "react-content-loader";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

import { ProjectType } from "types/project.types";

import leftArrow from "assets/icons/left-arrow.svg";

import classes from "./styles.module.scss";

interface Props extends ProjectType {
  onLoad: any;
}

export const SkeletonProject: React.FC = () => {
  return (
    <ContentLoader
      className={`${classes.wrapper} ${classes["wrapper--skeleton"]}`}
      speed={2}
      width={"100%"}
      height={"100%"}
      backgroundColor="white"
      foregroundColor="rgba(255, 150, 214, 0.2)"
    >
      <rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
    </ContentLoader>
  );
};

const Project: React.FC<Props> = (props) => {
  const carouselRef = useRef<null | HTMLDivElement>(null);

  const [carouselWidth, setCarouselWidth] = useState(100);
  const [carouselScrollLeft, setCarouselScrollLeft] = useState(0);

  const leftButtonHandler = () => {
    if (!carouselRef.current) {
      return;
    }
    setCarouselScrollLeft((prev) => prev - carouselWidth);

    carouselRef.current.scrollBy({
      left: -carouselWidth,
      behavior: "smooth",
    });

    setTimeout(() => {
      setCarouselScrollLeft(carouselRef.current!.scrollLeft);
    }, 500);
  };

  const rightButtonHandler = () => {
    if (!carouselRef.current) {
      return;
    }

    setCarouselScrollLeft((prev) => prev + carouselWidth);

    carouselRef.current.scrollBy({
      left: carouselWidth,
      behavior: "smooth",
    });

    setTimeout(() => {
      setCarouselScrollLeft(carouselRef.current!.scrollLeft);
    }, 500);
  };

  useEffect(() => {
    if (!carouselRef.current) {
      return;
    }

    setCarouselWidth(carouselRef.current!.offsetWidth);

    carouselRef.current?.scrollBy({ left: -30000 });
  }, [carouselRef.current?.offsetWidth]);

  const altClasses = carouselScrollLeft > 20 ? classes["hide"] : "";

  return (
    <div className={classes.wrapper}>
      <div className={`${classes.header} ${altClasses}`}>
        <div className={classes.header__item}>{props.name}</div>
        {props.pro && (
          <div
            className={`${classes.header__item} ${classes["header__item--pro"]}`}
          >
            PROJET PRO
          </div>
        )}
      </div>
      <button
        className={`${classes.button} ${classes["button--left"]}`}
        onClick={leftButtonHandler}
      >
        <img
          className={classes.button__img}
          src={leftArrow}
          alt={"Flèche gauche"}
        />
      </button>
      <button
        className={`${classes.button} ${classes["button--right"]}`}
        onClick={rightButtonHandler}
      >
        <img
          className={classes.button__img}
          src={leftArrow}
          alt={"Flèche droite"}
        />
      </button>
      <div ref={carouselRef} className={classes.carousel}>
        {props.images.map((image, index) => (
          <img
            className={classes.carousel__item}
            src={image}
            alt={props.name}
            key={index}
            onLoad={props.onLoad}
          />
        ))}
      </div>
      <div className={`${classes.footer} ${altClasses}`}>
        <div
          className={`${classes.footer__item} ${classes["footer__item--description"]}`}
        >
          {props.description}
        </div>
        <div
          className={`${classes.footer__item} ${classes["footer__item--date"]}`}
        >
          {props.showsDate
            ? format(new Date(props.date), "MM/y", { locale: fr })
            : props.dateAltText}
        </div>
      </div>
    </div>
  );
};

export default Project;
