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
      height={"100%"}
      backgroundColor="#F3F2F7"
      foregroundColor="rgba(255, 150, 214, 0.2)"
    >
      <rect className={classes.skeleton__name} rx="3" ry="3" />
      <rect className={classes.skeleton__pro} rx="3" ry="3" />
      <rect className={classes.skeleton__date} rx="3" ry="3" />
      <rect className={classes.skeleton__description} rx="5" ry="5" />
    </ContentLoader>
  );
};

const Project: React.FC<Props> = (props) => {
  const carouselRef = useRef<null | any>(null);

  const [leftButtonIsDisabled, setLeftButtonIsDisabled] = useState(false);
  const [rightButtonIsDisabled, setRightButtonIsDisabled] = useState(false);
  const [carouselWidth, setCarouselWidth] = useState(100);
  const [carouselScrollLeft, setCarouselScrollLeft] = useState(0);
  const [carouselScrollLeftMax, setCarouselScrollLeftMax] = useState(0);

  const buttonHandler = (params: { scrollLeft: boolean }) => {
    if (!carouselRef.current) {
      return;
    }
    params.scrollLeft
      ? setLeftButtonIsDisabled(true)
      : setRightButtonIsDisabled(true);

    setCarouselScrollLeft((prev) =>
      params.scrollLeft ? prev - carouselWidth : prev + carouselWidth
    );

    carouselRef.current.scrollBy({
      left: params.scrollLeft ? -carouselWidth : +carouselWidth,
      behavior: "smooth",
    });

    setTimeout(() => {
      setCarouselScrollLeft(carouselRef.current!.scrollLeft);
      params.scrollLeft
        ? setLeftButtonIsDisabled(false)
        : setRightButtonIsDisabled(false);
    }, 500);
  };

  const leftButtonHandler = () => {
    buttonHandler({ scrollLeft: true });
  };

  const rightButtonHandler = () => {
    buttonHandler({ scrollLeft: false });
  };

  useEffect(() => {
    if (!carouselRef.current) {
      return;
    }

    setCarouselWidth(carouselRef.current!.offsetWidth);

    carouselRef.current?.scrollBy({ left: -30000 });
  }, [carouselRef.current?.offsetWidth]);

  useEffect(() => {
    if (!carouselRef.current) {
      return;
    }

    setCarouselScrollLeftMax(carouselRef.current!.scrollLeftMax);
  }, [
    carouselScrollLeft,
    carouselWidth,
    carouselRef.current?.scrollLeft,
    carouselScrollLeftMax,
  ]);

  const hideLeftButton =
    carouselScrollLeft - carouselWidth <= -20 ? classes["hide-button"] : "";

  const hideRightButton =
    carouselScrollLeft + carouselWidth >= carouselScrollLeftMax + 20
      ? classes["hide-button"]
      : "";

  const hideDiv = carouselScrollLeft > 20 ? classes["hide-div"] : "";

  return (
    <div className={classes.wrapper}>
      <div className={`${classes.header} ${hideDiv}`}>
        <div className={classes.header__item}>{props.name}</div>
        {props.pro && (
          <div
            className={`${classes.header__item} ${classes["header__item--pro"]}`}
          >
            PROJET PRO
          </div>
        )}
      </div>
      <div className={`${classes.date} ${hideDiv}`}>
        <div className={classes.date__item}>
          {props.showsDate
            ? format(new Date(props.date), "MM/y", { locale: fr })
            : props.dateAltText}
        </div>
      </div>
      <button
        disabled={leftButtonIsDisabled}
        className={`${classes.button} ${classes["button--left"]} ${hideLeftButton}`}
        onClick={leftButtonHandler}
      >
        <img
          className={classes.button__img}
          src={leftArrow}
          alt={"Flèche gauche"}
        />
      </button>
      <button
        disabled={rightButtonIsDisabled}
        className={`${classes.button} ${classes["button--right"]} ${hideRightButton}`}
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
      <div className={`${classes.description} ${hideDiv}`}>
        <div className={classes.description__item}>{props.description}</div>
      </div>
    </div>
  );
};

export default Project;
