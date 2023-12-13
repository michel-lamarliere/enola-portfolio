import React from "react";

import Hero from "features/home/components/Hero/Hero";

import Contact from "features/contact/components/Contact/Contact";
import { Services } from "features/services/components/Services";
import { RoundedButtonTypes } from "components/uiElements/RoundedButton";
import { routes } from "config/routes";
import RoundedButton from "components/uiElements/RoundedButton/RoundedButton";

import classes from "features/home/page/HomePage.module.scss";

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
