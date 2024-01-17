import React from "react";

import {
  RoundedButton,
  RoundedButtonTypes,
} from "components/uiElements/RoundedButton/RoundedButton";
import { routes } from "config/routes";

import photo from "assets/about.jpg";

import { Container } from "components/Container";

import classes from "pages/about-me/components/AboutMe/AboutMe.module.scss";

const AboutMe = () => {
  return (
    <div className={classes.container}>
      <Container variant={"lg"}>
        <div className={classes.wrapper}>
          <img className={classes.image} src={photo} alt={"Enola Louge"} />
          <div className={classes.text}>
            <h3 className={classes.text__title}>Me connaître</h3>
            <p className={classes.text__paragraph}>
              Hello ! Moi c’est Enola, <br />
              Designer de marque passionnée.
              <br />
              <br />
              Je crée des identités visuelles uniques pour aider les entreprises
              à se démarquer et communiquer leurs valeurs, le tout dans la bonne
              humeur !
              <br />
              <br />
              C’est après un BAC+3 en fac de droit, que j’ai décidé de me
              réorienter dans le design, ma réelle passion depuis toute petite.
              À l'écoute de mes clients, je m'efforce de comprendre leurs
              besoins et de traduire leur essence dans des designs uniques.
              <br />
              <br />
              Après plus de 3 ans d'expérience, j’ai travaillé sur de multiples
              projets avec des entreprises de toute taille : des dizaines de
              TPE, 4 PME, 2 ETI et une multinationale.
              <br />
              Mais quelle que soit la taille de votre entreprise ou vos
              objectifs, je serai heureuse de vous aider à communiquer sur vos
              valeurs !
              <br />
              <br />
              Contactez-moi pour discuter de votre projet et donner vie à vos
              idées !
            </p>
            <RoundedButton
              type={RoundedButtonTypes.LINK}
              className={classes.text__button}
              to={routes.services.url()}
              text={"Découvrir mes services"}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutMe;
