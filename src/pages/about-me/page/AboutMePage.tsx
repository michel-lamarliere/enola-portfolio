import React from "react";

import { Reviews } from "pages/about-me/components/Reviews/Reviews";
import { AboutMe } from "pages/about-me/components/AboutMe/AboutMe";
import {
  RoundedButton,
  RoundedButtonTypes,
} from "components/RoundedButton/RoundedButton";
import { routes } from "config/routes";

import styles from "pages/about-me/page/AboutMePage.module.scss";

export const AboutMePage = () => {
  return (
    <div className={styles.wrapper}>
      <AboutMe />
      <Reviews />
      <div className={styles.footer}>
        <div className={styles.footer_question}>
          Et si on travaillait ensemble ?
        </div>
        <RoundedButton
          text={"Me contacter"}
          type={RoundedButtonTypes.LINK}
          to={`${routes.home.url}${routes.home.hashes?.contact}`}
          className={styles.footer_link}
        />
      </div>
    </div>
  );
};
