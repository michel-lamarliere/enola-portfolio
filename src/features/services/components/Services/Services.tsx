import React, { useEffect, useState } from "react";

import VisualIdentityLogo from "components/uiElements/svgs/services/VisualIdentityLogo";
import WebDesignLogo from "components/uiElements/svgs/services/WebDesignLogo";
import PackagingLogo from "components/uiElements/svgs/services/PackagingLogo";

import classes from "./Services.module.scss";
import RoundedButton, {
  RoundedButtonTypes,
} from "components/uiElements/RoundedButton/RoundedButton";

export const Services = () => {
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
        <h3 className={classes.title}>Mes services</h3>
        <div className={classes.services}>
          {services.map((service, index) => (
            <h4 className={classes.services__item} key={index}>
              <div className={classes.services__item__icon}>{service.icon}</div>
              <h5 className={classes.services__item__title}>{service.title}</h5>
              <p className={classes.services__item__description}>
                {service.description}
              </p>
            </h4>
          ))}
        </div>
        <div className={classes.downloadDescription}>
          Envie d’en savoir plus ? Consultez mon PDF présentation de service
        </div>
        <RoundedButton
          text={"Télécharger mon PDF"}
          type={RoundedButtonTypes.ANCHOR}
          href={""}
          download
          className={classes.downloadButton}
        />
      </div>
    </div>
  );
};
