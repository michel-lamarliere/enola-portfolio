import React from "react";
import { Link } from "react-router-dom";

import elLogo from "assets/icons/enola-louge_logo.svg";
import behanceIcon from "assets/icons/behance.svg";
import instagramIcon from "assets/icons/instagram.svg";
import linkedinIcon from "assets/icons/linkedin.svg";

import classes from "./styles.module.scss";

const Footer: React.FC = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.wrapper}>
        <div className={classes.links}>
          <img
            src={elLogo}
            alt={"Enola Louge"}
            className={classes["links__el-logo"]}
          />

          <div className={classes.links__socials}>
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
            to={"/mentions-legales"}
            className={`${classes["legal-mentions"]} ${classes["legal-mentions--desktop"]}`}
          >
            Mentions légales
          </Link>
        </div>
        <div className={classes.info}>
          <Link
            to={"/mentions-legales"}
            className={`${classes["legal-mentions"]} ${classes["legal-mentions--mobile"]}`}
          >
            Mentions légales
          </Link>
          <div className={classes.info__rights}>
            Enola Louge 2022 - tous droits réservés
          </div>
          <div className={classes.info__credits}>
            <div className={classes.info__credits__text}>
              Web design par Enola Louge
            </div>
            <div className={classes.info__credits__text}>
              Développement par Michel Lamarlière
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
