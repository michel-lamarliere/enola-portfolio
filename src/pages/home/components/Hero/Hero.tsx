import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import cn from "classnames";

import {
  RoundedButton,
  RoundedButtonTypes,
} from "components/RoundedButton/RoundedButton";
import { routes } from "config/routes";
import { Container } from "components/Container";

import mainImg from "assets/home.jpg";

import styles from "pages/home/components/Hero/Hero.module.scss";

export const Hero = () => {
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

    return () => typed.current.destroy();
  }, []);

  return (
    <Container>
      <div className={styles.wrapper}>
        <div className={styles.leftContainer}>
          <h1 className={styles.name}>enola louge</h1>
          <h2 className={styles.title}>
            <div className={styles.title_static}>Graphiste</div>
            <span className={styles.title_dynamic} ref={el} />
          </h2>
          <div className={styles.image}>
            <img
              src={mainImg}
              alt={"Enola Louge"}
              className={cn(styles.image_img, styles.image_img__mobile)}
            />
          </div>
          <div className={styles.description}>
            Bienvenue sur mon site !
            <br />
            <br />
            Je m'appelle Enola et je suis spécialisée dans la création
            d’identité visuelle depuis plus de 3 ans.
            <br />
            <br />
            Mon univers graphique est coloré, lumineux, simplifié, joyeux,
            mémorable et en constante évolution. J’accorde également beaucoup
            d’importance à l'expérience client : communication, adaptation et
            qualité sont mes mottos !
            <br />
            <br />
            Ensemble, faisons de votre marque une expérience visuelle unique !
          </div>
          <RoundedButton
            type={RoundedButtonTypes.LINK}
            to={routes.projects.url()}
            text={"Voir mes projets"}
            className={styles.button}
          />
        </div>
        <div className={styles.image}>
          <img
            src={mainImg}
            alt={"Enola Louge"}
            className={cn(styles.image_img, styles.image_img__desktop)}
          />
        </div>
      </div>
    </Container>
  );
};
