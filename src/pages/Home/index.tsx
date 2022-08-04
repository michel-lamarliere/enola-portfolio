import React, { useEffect, useRef } from "react";

import Typed from "typed.js";
import classes from "./styles.module.scss";
import MainContainer from "components/containers/MainContainer";

const Home: React.FC = () => {
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
        <div className={classes.main}>
          <div className={classes.main__name}>enola louge</div>
          <div className={classes.main__title}>
            <div className={classes["main__title--static"]}>Graphiste</div>
            <span className={classes["main__title--dynamic"]} ref={el} />
          </div>
          {/*REMOVE WHEN IMAGE IS PROVIDED*/}
          <div className={classes.main__image} />
          {/*<img
            src={""}
            alt={"Photo d'Enola Louge"}
            className={classes.main__image}
          />*/}
          <div className={classes.main__description}>
            Spécialisée dans la création d’identité visuelle et le web design.
            <br />
            Ma curiosité et mon goût pour la nouveauté m’ont poussé à toujours
            me renouveler dans mes créations.
            <br />
            Soucieuse de la satisfaction de mes clients, j’arrive toujours à
            m’adapter à leurs besoins.
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default Home;
