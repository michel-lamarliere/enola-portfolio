import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

import RoundedButton, {
  RoundedButtonTypes,
} from "components/uiElements/RoundedButton/RoundedButton";
import { routes } from "config/routes";

import mainImg from "assets/home.jpg";

import classes from "pages/home/components/Hero/Hero.module.scss";

const Hero: React.FC = () => {
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
          Bienvenue sur mon site !
          <br />
          <br />
          Je m'appelle Enola et je suis spécialisée dans la création d’identité
          visuelle depuis plus de 3 ans.
          <br />
          <br />
          Mon univers graphique est coloré, lumineux, simplifié, joyeux,
          mémorable et en constante évolution. J’accorde également beaucoup
          d’’importance à l'expérience client : communication, adaptation,
          flexibilité et qualité sont mes motos !
          <br />
          <br />
          Ensemble, faisons de votre marque une expérience visuelle unique !
        </div>
        <RoundedButton
          type={RoundedButtonTypes.LINK}
          to={routes.projects.url()}
          text={"Voir mes projets"}
          className={classes.button}
        />
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

export default Hero;
