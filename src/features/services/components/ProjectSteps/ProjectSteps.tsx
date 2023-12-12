import React from "react";
import { ProjectStep } from "./ProjectStep";

import styles from "./ProjectSteps.module.scss";

const steps = [
  {
    title: "La rencontre",
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
    paragraph:
      "On y est presque, mais avant de créer, il faut s’inspirer ! Je fais donc une proposition de 2 univers distincts, composés de créations en rapport avec votre projet; logos, typos, couleurs… J’argumente le tout pour vous faire part de ma vision globale et en savoir plus sur vos goûts. Une fois cette étape terminée, ça va glisser tout seul !",
  },
  {
    title: "La création",
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
            image={""}
            number={index + 1}
            title={step.title}
            paragraph={step.paragraph}
          />
        ))}
      </div>
    </div>
  );
};
