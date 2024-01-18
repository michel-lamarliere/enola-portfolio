import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";

import { routes } from "config/routes";
import { Container } from "components/Container";

import elLogo from "assets/icons/enola-louge_logo.svg";
import behanceIcon from "assets/icons/behance.svg";
import instagramIcon from "assets/icons/instagram.svg";
import linkedinIcon from "assets/icons/linkedin.svg";

import styles from "layout/Footer/Footer.module.scss";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.links}>
            <img
              src={elLogo}
              alt={"Enola Louge"}
              className={styles["links_elLogo"]}
            />

            <div className={styles.links_socials}>
              <a
                href={"https://www.behance.net/enolalouge1"}
                target={"_blank"}
                rel="noreferrer"
              >
                <img src={behanceIcon} alt={"Behance"} />
              </a>
              <a
                href={"https://www.instagram.com/enolalouge.design"}
                target={"_blank"}
                rel="noreferrer"
              >
                <img src={instagramIcon} alt={"Instagram"} />
              </a>
              <a
                href={"https://www.linkedin.com/in/enola-louge-76b76a1a2"}
                target={"_blank"}
                rel="noreferrer"
              >
                <img src={linkedinIcon} alt={"Linkedin"} />
              </a>
            </div>
            <Link
              to={routes.legalNotice}
              className={cn(
                styles.legalMentions,
                styles.legalMentions__desktop
              )}
            >
              Mentions légales
            </Link>
          </div>
          <div className={styles.info}>
            <Link
              to={routes.legalNotice}
              className={cn(styles.legalMentions, styles.legalMentions__mobile)}
            >
              Mentions légales
            </Link>
            <div className={styles.info_rights}>
              Enola Louge {new Date().getFullYear()} - tous droits réservés
            </div>
            <div className={styles.info_credits}>
              <div className={styles.info_credits_text}>
                Web design par Enola Louge
              </div>
              <div className={styles.info_credits_text}>
                Développement par Michel Lamarlière
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
