import React, { ReactElement, useEffect, useState } from "react";

import VisualIdentityLogo from "components/uiElements/svgs/services/VisualIdentityLogo";
import WebDesignLogo from "components/uiElements/svgs/services/WebDesignLogo";
import PackagingLogo from "components/uiElements/svgs/services/PackagingLogo";

import classes from "./Services.module.scss";

type Props = {
  showDescription?: boolean;
  children: ReactElement;
};

export const Services = ({ showDescription, children }: Props) => {
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
    subtitle: string;
    description: string | React.ReactNode;
  }[] = [
    {
      icon: <VisualIdentityLogo useAltColor={visualIdentityAltColor} />,
      title: "Identité visuelle & logo",
      subtitle: "Pour vous démarquer et atteindre votre cible rêvée",
      description: (
        <>
          Une identité visuelle stratégique, cohérente et impactante pour
          traduire vos valeurs et refléter votre image de marque.
          <br />
          <br />
          Logo dans différentes déclinaisons, échelles typographiques, palette
          de couleurs, symboles graphiques forts…
          <br />
          <br />
          Le tout mis en commun et guidé par des règles et conseils
          d’utilisation dans une charte graphique.
        </>
      ),
    },
    {
      title: "Web design",
      icon: <WebDesignLogo useAltColor={webDesignAltColor} />,
      subtitle:
        "Pour gagner en visibilité et faciliter votre création de contenu.",
      description: (
        <>
          Je crée vos modèles de posts en accord avec votre identité visuelle je
          les rend 100% modifiables sur un espace Canva (ou Adobe Express).
          <br />
          <br />
          Des modèles uniques de feed posts, de stories, de couverture de reels,
          etc.
          <br />
          <br />
          Tout est modifiable simplement et rapidement.
        </>
      ),
    },
    {
      title: "Packaging & impression",
      icon: <PackagingLogo useAltColor={packagingAltColor} />,
      subtitle:
        "Que ce soit pour le web ou l’impression, voici un petit zoom de mes services à la carte",
      description: (
        <>
          Ma partie préférée, évidemment !
          <br />
          <br />
          Mon savoir-faire et ma créativité vont me permettre de concevoir des
          propositions graphiques pertinentes.
          <br />
          <br />
          Suites à vos retours, je fais d’éventuelles modifications pour que
          tout soit parfait.
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
              {showDescription && (
                <div className={classes.services__item__text}>
                  <h5 className={classes.services__item__text__subtitle}>
                    {service.subtitle}
                  </h5>
                  <p className={classes.services__item__text__description}>
                    {service.description}
                  </p>
                </div>
              )}
            </h4>
          ))}
        </div>
        {children}
      </div>
    </div>
  );
};
