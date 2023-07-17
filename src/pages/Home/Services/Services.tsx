import React, { useEffect, useState } from "react";

import RoundedButton, {
  RoundedButtonTypes,
} from "components/uiElements/RoundedButton/RoundedButton";
import PackagingLogo from "components/uiElements/svgs/services/PackagingLogo";
import WebDesignLogo from "components/uiElements/svgs/services/WebDesignLogo";
import VisualIdentityLogo from "components/uiElements/svgs/services/VisualIdentityLogo";

import classes from "pages/Home/Services/Services.module.scss";

const Services: React.FC = () => {
  const [visualIdentityAltColor, setVisualIdentityAltColor] = useState(false);
  const [webDesignAltColor, setWebDesignAltColor] = useState(false);
  const [packagingAltColor, setPackagingAltColor] = useState(false);

  const services: { title: string; icon: JSX.Element }[] = [
    {
      title: "Identité visuelle & logo",
      icon: <VisualIdentityLogo useAltColor={visualIdentityAltColor} />,
    },
    {
      title: "Web design",
      icon: <WebDesignLogo useAltColor={webDesignAltColor} />,
    },
    {
      title: "Packaging & impression",
      icon: <PackagingLogo useAltColor={packagingAltColor} />,
    },
  ];

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

  return (
    <div className={classes.wrapper}>
      <h3 className={classes.title}>Mes services</h3>
      <ul className={classes.services}>
        {services.map((service, index) => (
          <h4 className={classes.services__item} key={+index}>
            <span className={classes.services__item__icon}>{service.icon}</span>
            <div className={classes.services__item__text}>{service.title}</div>
          </h4>
        ))}
      </ul>
      <RoundedButton
        type={RoundedButtonTypes.LINK}
        to={"/a-propos"}
        text={"En savoir plus"}
        className={classes.button}
      />
    </div>
  );
};

export default Services;
