import React from "react";

import { Hero } from "pages/home/components/Hero/Hero";
import { Contact } from "pages/home/components/Contact/Contact";
import { Services } from "pages/services/components/Services";
import { RoundedButtonTypes } from "components/RoundedButton";
import { RoundedButton } from "components/RoundedButton/RoundedButton";
import { routes } from "config/routes";

import styles from "./HomePage.module.scss";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <Services showDescription={false}>
        <RoundedButton
          type={RoundedButtonTypes.LINK}
          to={routes.services.url()}
          text={"En savoir plus"}
          className={styles.showMoreButton}
        />
      </Services>
      <Contact />
    </>
  );
};
