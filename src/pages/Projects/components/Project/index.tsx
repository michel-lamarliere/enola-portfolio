import React, { useEffect, useRef, useState } from "react";
import ContentLoader from "react-content-loader";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

import { ProjectType } from "types/project.types";

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
      viewBox="0 0 100% 100%"
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

  useEffect(() => {
    if (carouselRef.current) {
      setCarouselWidth(carouselRef.current.offsetWidth);
    }

    setCarouselWidth(carouselRef.current!.offsetWidth);

    carouselRef.current?.scrollBy({ left: -30000 });
  }, [carouselRef.current?.offsetWidth]);

  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <div className={classes.header__item}>{props.name}</div>
        {props.pro && <div className={classes.header__item}>PROJET PRO</div>}
      </div>
      <button
        className={`${classes.button} ${classes["button--left"]}`}
        onClick={() => {
          if (carouselRef.current) {
            carouselRef.current.scrollBy({
              left: -carouselWidth,
              behavior: "smooth",
            });
          }
        }}
      >
        {"<"}
      </button>
      <button
        className={`${classes.button} ${classes["button--right"]}`}
        onClick={() => {
          if (carouselRef.current) {
            carouselRef.current.scrollBy({
              left: carouselWidth,
              behavior: "smooth",
            });
          }
        }}
      >
        {">"}
      </button>
      <div ref={carouselRef} className={classes.carousel} id={"carousel"}>
        {/*<button><img src={} alt={'gauche'}/></button>*/}
        {/*<button><img src={} alt={'droite'}/></button>*/}
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
      <div className={classes.footer}>
        <div className={classes.footer__description}>{props.description}</div>
        <div className={classes.footer__date}>
          {props.showsDate
            ? format(new Date(props.date), "MMMM y", { locale: fr })
            : "∞"}
        </div>
      </div>
    </div>
  );
};

export default Project;
