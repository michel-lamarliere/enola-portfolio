import React from "react";

import placeholderIcon from "assets/icons/e_logo.svg";

import classes from "./styles.module.scss";
import MainContainer from "../../../../components/containers/MainContainer";

const contactInfo: { text: string; icon: string }[] = [
  {
    text: "contact@enolalouge.com",
    icon: placeholderIcon,
  },
  {
    text: "+33 06 08 66 01 99",
    icon: placeholderIcon,
  },
  {
    text: "Toulouse, 31000",
    icon: placeholderIcon,
  },
];

const Contact: React.FC = () => {
  return (
    <MainContainer>
      <div className={classes.wrapper}>
        <div className={classes.details}>
          <div className={classes.details__title}>
            N’hésitez-pas à me contacter !
          </div>
          <div className={classes.details__description}>
            Vous souhaitez me parler de vive voix ? Je serai ravie de vous
            proposer un appel, une visio ou une rencontre !
          </div>
          <div className={classes["details__contact-info"]}>
            {contactInfo.map((info) => (
              <div className={classes["details__contact-info__item"]}>
                <img
                  src={info.icon}
                  alt={info.text}
                  className={classes["details__contact-info__item__icon"]}
                />
                <div className={classes["details__contact-info__item__text"]}>
                  {info.text}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={classes.form}>
          <div className={classes.form__title}>
            Besoin d’un renseignement ou d’un devis ? Dites-moi tout !
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default Contact;
