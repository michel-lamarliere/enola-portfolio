import React from "react";

import styles from "./FAQ.module.scss";
import { FAQItem } from "features/services/components/FAQ/FAQItem/FAQItem";

const faq = [
  {
    question: "Quels sont les tarifs ?",
    answer:
      "Les tarifs varient en fonction de votre projet et de vos besoins. Je vous invite donc à me contacter afin que je puisse vous faire un devis personnalisé.",
  },
  {
    question: "Quels sont les délais ?",
    answer:
      "Les délais varient en fonction de votre projet et de vos besoins. Je vous invite donc à me contacter afin que je puisse vous faire un devis personnalisé.",
  },
  {
    question: "Quels sont les délais ?",
    answer:
      "Les délais varient en fonction de votre projet et de vos besoins. Je vous invite donc à me contacter afin que je puisse vous faire un devis personnalisé.",
  },
];

export const FAQ = () => {
  return (
    <div className={styles.FAQ}>
      <div className={styles.banner}>
        <div className={styles.banner_title}>
          Une question ? J’y ai sûrement répondu dans cette FAQ
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.data}>
          {faq.map(({ question, answer }) => (
            <FAQItem question={question} answer={answer} />
          ))}
        </div>
      </div>
    </div>
  );
};
