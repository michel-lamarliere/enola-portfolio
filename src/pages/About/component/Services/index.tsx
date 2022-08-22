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
    description: string | React.ReactNode;
  }[] = [
    {
      title: "Identité visuelle & logo",
      icon: <VisualIdentityLogo useAltColor={visualIdentityAltColor} />,
      description: (
        <>
          Un logo n’est pas aussi efficace sans une identité visuelle cohérente
          et impactante. <br /> <br />
          Vous aurez sûrement besoin d’une charte graphique (guide des couleurs,
          typographies, symboles forts, etc.) et de templates pour éditer
          simplement les créations.
        </>
      ),
    },
    {
      title: "Web design",
      icon: <WebDesignLogo useAltColor={webDesignAltColor} />,
      description: (
        <>
          Besoin d’une maquette de site vitrine ou de landing page ? <br />
          <br />
          Je suis capable de créer tous les éléments digitaux pour votre projet
          ainsi que d’accessoires pour le web : Set d’icônes, signature e-mail,
          bannière web, newsletter, etc.
        </>
      ),
    },
    {
      title: "Packaging & impression",
      icon: <PackagingLogo useAltColor={packagingAltColor} />,
      description: (
        <>
          Que ce soit pour un design d’impression ou d’emballage je créerai les
          designs adaptés à vos besoins. <br />
          <br />
          Voici quelques exemples : <br />
          Carte de visite, menu, brochure, emballage produit, étiquette,
          couverture de livre, etc.
        </>
      ),
    },
  ];
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.title}>Mes services</div>
        <div className={classes.services}>
          {services.map((service, index) => (
            <div className={classes.services__item} key={index}>
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
