import React from "react";

import classes from "./styles.module.scss";

const services: {
  icon: string;
  title: string;
  description: string;
}[] = [
  {
    icon: "",
    title: "Identité visuelle & logo",
    description:
      "Le texte de l’identité visuelle n’est pas encore disponible. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
  {
    icon: "",
    title: "Web design",
    description:
      "Le texte du web design n’est pas encore disponible. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
  {
    icon: "",
    title: "Packaging & impression",
    description:
      "Le texte du packaging n’est pas encore disponible. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
];

const Services: React.FC = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.title}>Mes services</div>
        <div className={classes.services}>
          {services.map((service) => (
            <div className={classes.services__item}>
              <div
                style={{
                  width: "4rem",
                  height: "4rem",
                  backgroundColor: "red",
                }}
              />
              {/*<img src={service.icon} alt={service.title} />*/}
              <div className={classes.services__item__title}>
                {service.title}
              </div>
              <div className={classes.services__item__description}>
                {service.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
