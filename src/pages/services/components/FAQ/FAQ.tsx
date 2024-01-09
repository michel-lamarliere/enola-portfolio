import React from "react";

import { FAQItem } from "pages/services/components/FAQ/FAQItem/FAQItem";

import styles from "pages/services/components/FAQ/FAQ.module.scss";

const faq = [
  {
    question: "Comment se déroule la collaboration sur un projet ?",
    answer:
      "Nous commençons par une rencontre, définissons vos besoins, établissons un devis après validation, et planifions le projet. La collaboration inclut des points réguliers, un suivi, et des conseils. Une fois le projet terminé, je m'assure de votre compréhension des créations et reste disponible pour d'éventuelles questions post-projet.",
  },
  {
    question:
      "Quelle est la durée habituelle pour la création de votre identité visuelle ?",
    answer:
      "La création d'une identité visuelle prend généralement entre 5 et 7 semaines, de la rencontre à la livraison des fichiers finaux.",
  },
  {
    question:
      "Comment savoir si c'est le moment idéal pour créer votre identité visuelle ?",
    answer:
      "C’est le bon moment si vous avez évolué, si votre communication rencontre des obstacles, ou si vous ne captez pas les clients appropriés. Si vous êtes récemment lancé et n'avez pas encore d'identité visuelle, venez me voir dès que vous aurez une vision claire de la direction de votre entreprise. N'hésitez pas à me contacter si vous doutez, je vous pourrai vous conseiller.",
  },
  {
    question: "Quel est le coût de vos services ?",
    answer:
      "Le coût varie selon vos besoins spécifiques puisque je personnalise les tarifs en fonction de vos besoins : identité visuelle simple (logo, couleurs, typographies) ou très complète (motifs, pictogrammes, papeterie, bannières…) . Vous pouvez me demander un devis (gratuit) par mail.",
  },
  {
    question: "Proposez-vous des options de paiement échelonné ?",
    answer:
      "Oui, les paiements peuvent être répartis sur 2 à 4 mois. Le projet débute avec un acompte de 30%, suivi de paiements mensuels pour faciliter l'investissement.",
  },
];

export const FAQ = () => {
  return (
    <div>
      <div className={styles.banner}>
        <div className={styles.banner_title}>
          Une question ? J’y ai sûrement répondu dans cette FAQ
        </div>
      </div>
      <div className={styles.listWrapper}>
        <ul className={styles.list}>
          {faq.map(({ question, answer }) => (
            <FAQItem question={question} answer={answer} />
          ))}
        </ul>
      </div>
    </div>
  );
};
