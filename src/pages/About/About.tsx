import React from "react";
import Reviews from "features/reviews/components/Reviews/Reviews";
import AboutMe from "pages/About/AboutMe/AboutMe";

import RoundedButton, {
  RoundedButtonTypes,
} from "components/uiElements/RoundedButton/RoundedButton";
import { routes } from "config/routes";

import classes from "pages/About/About.module.scss";

const About: React.FC = () => {
  return (
    <>
      <AboutMe />
      <Reviews />
      <div className={classes.footer}>
        <div className={classes.footer_content}>
          <div className={classes.footer_content_question}>
            Et si on travaillait ensemble ?
          </div>
          <RoundedButton
            text={"Me contacter"}
            type={RoundedButtonTypes.LINK}
            to={`${routes.home.url}${routes.home.hashes?.contact}`}
            className={classes.footer_content_link}
          />
        </div>
      </div>
    </>
  );
};

export default About;
