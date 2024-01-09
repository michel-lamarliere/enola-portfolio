import React from "react";

import Hero from "pages/home/components/Hero/Hero";

import Contact from "pages/home/components/Contact/Contact";
import { Services } from "pages/services/components/Services";
import { RoundedButtonTypes } from "components/uiElements/RoundedButton";
import { routes } from "config/routes";
import RoundedButton from "components/uiElements/RoundedButton/RoundedButton";

import classes from "pages/home/page/HomePage.module.scss";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Services showDescription={false}>
        <RoundedButton
          type={RoundedButtonTypes.LINK}
          to={routes.about.url()}
          text={"En savoir plus"}
          className={classes.showMoreButton}
        />
      </Services>
      <Contact />
    </>
  );
};

export default HomePage;
