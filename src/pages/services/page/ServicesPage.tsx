import React from "react";

import { Services } from "pages/services/components/Services";
import { ProjectSteps } from "pages/services/components/ProjectSteps";
import { FAQ } from "pages/services/components/FAQ";
import RoundedButton, {
  RoundedButtonTypes,
} from "components/uiElements/RoundedButton/RoundedButton";
import { routes } from "config/routes";

import styles from "pages/services/page/ServicesPage.module.scss";

export const ServicesPage = () => {
  return (
    <div className={styles.ServicesPage}>
      <Services showDescription>
        <div className={styles.footer}>
          <div className={styles.downloadDescription}>
            Envie d’en savoir plus ? Consultez mon PDF présentation de service
          </div>
          <RoundedButton
            text={"Télécharger mon PDF"}
            type={RoundedButtonTypes.ANCHOR}
            href={
              "https://enola-louge-portfolio-strapi.s3.eu-west-3.amazonaws.com/enola_louge_services_2023_b2601920f2.pdf"
            }
            download
            className={styles.downloadButton}
          />
        </div>
      </Services>
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
