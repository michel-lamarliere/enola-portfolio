import React, { useEffect, useState } from "react";

import MainContainer from "components/containers/MainContainer";
import Error404Logo from "components/ui-elements/Error404Logo";
import RoundedButton, {
  RoundedButtonTypes,
} from "components/ui-elements/RoundedButton";

import classes from "./styles.module.scss";

const Error404: React.FC = () => {
  const [showAltColor, setShowAltColor] = useState(false);

  useEffect(() => {
    const test = setInterval(() => {
      setShowAltColor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(test);
    };
  }, [showAltColor]);

  return (
    <MainContainer>
      <div className={classes.wrapper}>
        <Error404Logo
          colorOneClassName={`${classes["logo-color-one"]} ${
            showAltColor && classes["logo-color-one--alt"]
          }`}
          colorTwoClassName={`${classes["logo-color-two"]} ${
            showAltColor && classes["logo-color-two--alt"]
          }`}
        />
        <div className={classes.title}>ERROR 404</div>
        <div className={classes.description}>
          Veuillez nous excuser mais cette page est introuvable.
        </div>
        <RoundedButton
          className={classes.button}
          text={"Retourner à l'accueil"}
          type={RoundedButtonTypes.LINK}
          to={"/accueil"}
        />
      </div>
    </MainContainer>
  );
};

export default Error404;
