import React, { useEffect, useState } from "react";

import RoundedButton, {
  RoundedButtonTypes,
} from "components/uiElements/RoundedButton/RoundedButton";
import Error404Logo from "components/uiElements/svgs/Error404Logo/Error404Logo";

import classes from "pages/Error404/Error404.module.scss";

const Error404: React.FC = () => {
  const [showAltColor, setShowAltColor] = useState(false);

  useEffect(() => {
    const changeColors = setInterval(() => {
      setShowAltColor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(changeColors);
    };
  }, [showAltColor]);

  return (
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
        to={"/"}
      />
    </div>
  );
};

export default Error404;
