import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Typed from "typed.js";

import { RootState } from "store/store";

import RoundedButton, {
  RoundedButtonTypes,
} from "components/ui-elements/RoundedButton";

import mainImg from "assets/home.jpg";

import classes from "./styles.module.scss";

const Main: React.FC = () => {
  const cvUrl = useSelector((state: RootState) => state.resume.url);

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
        <div className={classes.name}>enola louge</div>
        <div className={classes.title}>
          <div className={classes["title--static"]}>Graphiste</div>
          <span className={classes["title--dynamic"]} ref={el} />
        </div>
        <img
          src={mainImg}
          alt={"Enola Louge"}
          className={`${classes.image} ${classes["image--mobile"]}`}
        />
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
            type={RoundedButtonTypes.ANCHOR}
            href={cvUrl ? cvUrl : ""}
            text={"Télécharger mon CV"}
          />
        </div>
      </div>

      <img
        src={mainImg}
        alt={"Enola Louge"}
        className={`${classes.image} ${classes["image--desktop"]}`}
      />
    </div>
  );
};

export default Main;
