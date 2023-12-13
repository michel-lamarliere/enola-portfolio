import React from "react";

import { ProjectStep } from "./ProjectStep";

import step1Img from "assets/images/project-steps/01.jpg";
import step2Img from "assets/images/project-steps/02.jpg";
import step3Img from "assets/images/project-steps/03.jpg";
import step4Img from "assets/images/project-steps/04.jpg";
import step5Img from "assets/images/project-steps/05.jpg";
import step6Img from "assets/images/project-steps/06.jpg";

import styles from "./ProjectSteps.module.scss";

const steps = [
  {
    title: "La rencontre",
    img: step1Img,
    paragraph: (
      <>
        Au programme ? <br /> Un premier échange, de préférence en visio, afin
        de faire votre connaissance et discuter de vos envies et besoins.
        <br /> J’en profite également pour vous montrer des projets récents et
        en rapport avec votre entreprise et organiser la suite de l’aventure.
      </>
    ),
  },
  {
    title: "L'analyse",
    img: step2Img,
    paragraph: (
      <>
        Grâce à l’appel découverte, je vais analyser les besoins réels et les
        solutions possibles. <br /> J’établis par la suite un devis sur mesure
        (paiement en plusieurs fois possible).
      </>
    ),
  },
  {
    title: "La direction artistique",
    img: step3Img,
    paragraph:
      "On y est presque, mais avant de créer, il faut s’inspirer ! Je fais donc une proposition de 2 univers distincts, composés de créations en rapport avec votre projet; logos, typos, couleurs… J’argumente le tout pour vous faire part de ma vision globale et en savoir plus sur vos goûts. Une fois cette étape terminée, ça va glisser tout seul !",
  },
  {
    title: "La création",
    img: step4Img,
    paragraph: (
      <>
        Ma partie préférée, évidemment ! <br /> Je mets mon expertise et ma
        créativité au service de propositions graphiques pertinentes. <br />{" "}
        Après discussion, je fais d’éventuels ajustements pour coller au plus
        près de tes attentes.
      </>
    ),
  },
  {
    title: "La livraison",
    img: step5Img,
    paragraph: (
      <>
        Tut tut, livraison en cours !<br /> Libérez de l’espace sur votre
        ordinateur, ça va envoyer du lourd.
        <br /> Je vous envoi les créations dans tous les formats et déclinaisons
        souhaitées, je vous offre également un petit guide pour utiliser les
        designs en totale autonomie.
      </>
    ),
  },
  {
    title: "Le suivi",
    img: step6Img,
    paragraph: (
      <>
        Je ne vous oublie pas, non jamaiiiis 🎶 <br /> Le projet est terminé et
        vous êtes à 100% satisfait , mais je ne disparais pas !<br /> Je reste
        disponible pour assurer un suivi, répondre à vos questions ou vous
        offrir d’autres conseils.
      </>
    ),
  },
];

export const ProjectSteps = () => {
  return (
    <div className={styles.ProjectSteps}>
      <div className={styles.title}>
        Les 5 étapes de la réalisation d’un projet
      </div>
      <div className={styles.boxes}>
        {steps.map((step, index) => (
          <ProjectStep
            key={index}
            image={step.img}
            number={index + 1}
            title={step.title}
            paragraph={step.paragraph}
          />
        ))}
      </div>
    </div>
  );
};
