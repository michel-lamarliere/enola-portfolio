import React from "react";

import RoundedButton, {
  RoundedButtonTypes,
} from "components/ui-elements/RoundedButton";

import classes from "./styles.module.scss";

const AboutMe: React.FC = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.title}>Me connaître</div>
        <div
          className={classes.image}
          style={{ height: "10rem", width: "100%", backgroundColor: "red" }}
        ></div>
        {/*<img className={classes.image} src={""} alt={"Moi"} />*/}
        <div className={classes.paragraph}>
          Le texte de mon profil n’est pas encore disponible. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor.
        </div>
        <RoundedButton
          text={"Télécharger mon CV"}
          type={RoundedButtonTypes.BUTTON}
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default AboutMe;
