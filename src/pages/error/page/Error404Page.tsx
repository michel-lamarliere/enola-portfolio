import React, { useEffect, useState } from "react";
import cn from "classnames";

import {
  RoundedButton,
  RoundedButtonTypes,
} from "components/RoundedButton/RoundedButton";
import { Error404Logo } from "pages/error/components/Error404Logo/Error404Logo";

import styles from "pages/error/page/Error404Page.module.scss";

export const Error404Page = () => {
  const [showAltColor, setShowAltColor] = useState(false);

  useEffect(() => {
    const changeColors = setInterval(() => {
      setShowAltColor((prev) => !prev);
    }, 500);

    return () => clearInterval(changeColors);
  }, [showAltColor]);

  return (
    <div className={styles.wrapper}>
      <Error404Logo
        colorOneClassName={cn(styles.logoColorOne, {
          [styles.logoColorOneAlt]: showAltColor,
        })}
        colorTwoClassName={cn(styles.logoColorTwo, {
          [styles.logoColorTwo__alt]: showAltColor,
        })}
      />
      <div className={styles.title}>ERROR 404</div>
      <div className={styles.description}>
        Veuillez nous excuser mais cette page est introuvable.
      </div>
      <RoundedButton
        className={styles.button}
        text={"Retourner à l'accueil"}
        type={RoundedButtonTypes.LINK}
        to={"/"}
      />
    </div>
  );
};
