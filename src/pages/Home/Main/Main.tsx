import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

import RoundedButton, {
  RoundedButtonTypes,
} from "components/uiElements/RoundedButton/RoundedButton";
import { routes } from "config/routes";

import mainImg from "assets/home.jpg";

import classes from "pages/Home/Main/Main.module.scss";

const Main: React.FC = () => {
  const el = useRef<any>(null);
  const typed = useRef<any>(null);

  useEffect(() => {
    const options = {
      strings: ["numérique.", "passionnée.", "créative."],
      startDelay: 200,
      typeSpeed: 50,
      backSpeed: 50,
      showCursor: false,
      loop: true,
    };

    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <div className={classes.wrapper}>
      <div className={classes["left-container"]}>
        <h1 className={classes.name}>enola louge</h1>
        <h2 className={classes.title}>
          <div className={classes["title--static"]}>Graphiste</div>
          <span className={classes["title--dynamic"]} ref={el} />
        </h2>
        <div className={classes.image}>
          <img
            src={mainImg}
            alt={"Enola Louge"}
            className={`${classes.image__img} ${classes["image__img--mobile"]}`}
          />
        </div>
        <div className={classes.description}>
          Spécialisée dans la création d’identité visuelle et le web design.
          <br />
          <br />
          Ma curiosité et mon goût pour la nouveauté m’ont poussé à toujours me
          renouveler dans mes créations.
          <br />
          <br />
          Soucieuse de la satisfaction de mes clients, j’arrive toujours à
          m’adapter à leurs besoins.
        </div>
        <div className={classes.button}>
          <RoundedButton
            type={RoundedButtonTypes.LINK}
            to={routes.projects}
            text={"Voir mes projets"}
          />
        </div>
      </div>
      <div className={classes.image}>
        <img
          src={mainImg}
          alt={"Enola Louge"}
          className={`${classes.image__img} ${classes["image__img--desktop"]}`}
        />
      </div>
    </div>
  );
};

export default Main;
