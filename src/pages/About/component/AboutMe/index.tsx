import React from "react";

import RoundedButton, {
  RoundedButtonTypes,
} from "components/ui-elements/RoundedButton";

import photo from "assets/about.jpg";

import classes from "./styles.module.scss";

const AboutMe: React.FC = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <img className={classes.image} src={photo} alt={"Enola Louge"} />
        <div className={classes.text}>
          <div className={classes.text__title}>Me connaître</div>
          <div className={classes.text__paragraph}>
            Je m’appelle Enola et je suis graphiste spécialisée dans le design
            d’identité visuelle et le web design.
            <br />
            <br />
            Avant de vivre de ma passion, j’ai obtenu une licence AES (économie,
            droit, gestion) qui m’a apporté rigueur, persévérance et curiosité.
            Ces qualités se reflètent aujourd’hui dans mes créations.
            <br />
            <br />
            Réelle passionnée du métier, à l’écoute de mes clients et toujours à
            la recherche du détail, je saurai créer les designs parfait pour
            votre projet.
            <br />
            <br />
            N’hésitez pas à me contacter si vous avez besoin d’un renseignement,
            c’est avec plaisir que je vous répondrai !
          </div>
          <RoundedButton
            type={RoundedButtonTypes.ANCHOR}
            className={classes.text__button}
            href={require("assets/cv.pdf")}
            text={"Télécharger mon CV"}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
