import React from "react";

import { Services } from "../components/Services";
import { ProjectSteps } from "features/services/components/ProjectSteps";
import { FAQ } from "features/services/components/FAQ";
import RoundedButton, {
  RoundedButtonTypes,
} from "components/uiElements/RoundedButton/RoundedButton";
import { routes } from "config/routes";

import styles from "./ServicesPage.module.scss";

export const ServicesPage = () => {
  return (
    <div className={styles.ServicesPage}>
      <Services />
      <ProjectSteps />
      <FAQ />
      <RoundedButton
        text={"Découvrir mes projets"}
        type={RoundedButtonTypes.LINK}
        to={routes.projects.url()}
        className={styles.linkToProjects}
      />
    </div>
  );
};
