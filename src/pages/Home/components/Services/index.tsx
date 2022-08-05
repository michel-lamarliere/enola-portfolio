import React from "react";

import RoundedButton, {
  RoundedButtonTypes,
} from "components/ui-elements/RoundedButton";

import placeholderIcon from "assets/icons/e_logo.svg";

import classes from "./styles.module.scss";

const services: { title: string; icon: string }[] = [
  {
    title: "Identité visuelle & logo",
    icon: placeholderIcon,
  },
  {
    title: "Web design",
    icon: placeholderIcon,
  },
  {
    title: "Packaging & impression",
    icon: placeholderIcon,
  },
];

const Services: React.FC = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.title}>Mes services</div>
      <ul className={classes.services}>
        {services.map((service) => (
          <div className={classes.services__item}>
            <img
              src={service.icon}
              alt={service.title}
              className={classes.services__item__icon}
            />
            <div className={classes.services__item__text}>{service.title}</div>
          </div>
        ))}
      </ul>
      <RoundedButton
        type={RoundedButtonTypes.LINK}
        to={""}
        text={"En savoir plus"}
        className={classes.button}
      />
    </div>
  );
};

export default Services;
