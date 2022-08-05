import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

import RoundedButton, {
  RoundedButtonTypes,
} from "components/ui-elements/RoundedButton";
import MainContainer from "components/containers/MainContainer";

import classes from "./styles.module.scss";

const Main: React.FC = () => {
  const el = useRef<any>(null);
  const typed = useRef<any>(null);

  useEffect(() => {
    const options = {
      strings: ["numérique.", "passionnée.", "créative.", "numérique."],
      startDelay: 200,
      typeSpeed: 50,
      backSpeed: 50,
      showCursor: false,
    };

    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <MainContainer>
      <div className={classes.wrapper}>
        <div className={classes["left-container"]}>
          <div className={classes.name}>enola louge</div>
          <div className={classes.title}>
            <div className={classes["title--static"]}>Graphiste</div>
            <span className={classes["title--dynamic"]} ref={el} />
          </div>
          {/*<img
            src={""}
            alt={"Photo d'Enola Louge"}
            className={classes.main__image}
          />*/}
          {/*REMOVE WHEN IMAGE IS PROVIDED*/}
          <div className={`${classes.image} ${classes["image--mobile"]}`} />
          <div className={classes.description}>
            Spécialisée dans la création d’identité visuelle et le web design.
            <br />
            Ma curiosité et mon goût pour la nouveauté m’ont poussé à toujours
            me renouveler dans mes créations.
            <br />
            Soucieuse de la satisfaction de mes clients, j’arrive toujours à
            m’adapter à leurs besoins.
          </div>
          <RoundedButton
            type={RoundedButtonTypes.BUTTON}
            className={classes.button}
            text={"Télécharger mon CV"}
            onClick={() => {}}
          />
        </div>
        <div className={`${classes.image} ${classes["image--desktop"]}`} />
      </div>
    </MainContainer>
  );
};

export default Main;
