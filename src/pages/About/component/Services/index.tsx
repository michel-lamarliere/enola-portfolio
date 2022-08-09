import React, { useEffect, useState } from "react";

import VisualIdentityLogo from "components/ui-elements/svg-components/services/VisualIdentityLogo";
import WebDesignLogo from "components/ui-elements/svg-components/services/WebDesignLogo";
import PackagingLogo from "components/ui-elements/svg-components/services/PackagingLogo";

import classes from "./styles.module.scss";

const Services: React.FC = () => {
  const [visualIdentityAltColor, setVisualIdentityAltColor] = useState(false);
  const [webDesignAltColor, setWebDesignAltColor] = useState(false);
  const [packagingAltColor, setPackagingAltColor] = useState(false);

  useEffect(() => {
    const changeVisualIdentityColors = setInterval(() => {
      setVisualIdentityAltColor((prev) => !prev);
    }, 500);

    const webDesignTimeout = setTimeout(() => {
      const changeWebDesignColors = setInterval(() => {
        setWebDesignAltColor((prev) => !prev);
      }, 500);

      return () => {
        clearInterval(changeWebDesignColors);
      };
    }, 333);

    const packagingTimeout = setTimeout(() => {
      const changePackagingColors = setInterval(() => {
        setPackagingAltColor((prev) => !prev);
      }, 500);

      return () => {
        clearInterval(changePackagingColors);
      };
    }, 666);

    return () => {
      clearInterval(changeVisualIdentityColors);
      clearTimeout(webDesignTimeout);
      clearTimeout(packagingTimeout);
    };
  }, []);

  const services: {
    icon: JSX.Element;
    title: string;
    description: string;
  }[] = [
    {
      title: "Identité visuelle & logo",
      icon: <VisualIdentityLogo useAltColor={visualIdentityAltColor} />,
      description:
        "Le texte de l’identité visuelle n’est pas encore disponible. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },
    {
      title: "Web design",
      icon: <WebDesignLogo useAltColor={webDesignAltColor} />,
      description:
        "Le texte du web design n’est pas encore disponible. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },
    {
      title: "Packaging & impression",
      icon: <PackagingLogo useAltColor={packagingAltColor} />,
      description:
        "Le texte du packaging n’est pas encore disponible. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },
  ];
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.title}>Mes services</div>
        <div className={classes.services}>
          {services.map((service) => (
            <div className={classes.services__item}>
              <div className={classes.services__item__icon}>{service.icon}</div>
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
