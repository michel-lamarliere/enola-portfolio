import React, { useRef, useState } from "react";

import leftArrowIcon from "assets/icons/left-arrow.svg";

import classes from "./styles.module.scss";

const reviews: {
  client: string;
  text: string;
  person: string;
  image: string;
  link: string;
}[] = [
  {
    client: "KANOA",
    text: "J’ai sollicité Enola pour faire mon logo et j’ai beaucoup apprécié son sérieux et sa créativité. Enola a pris le temps d’écouter toutes mes recommandations pour que le logo corresponde à notre branding. Je la remercie encore et je la recommande !",
    person: "Mehdi MOUSSA",
    image: "",
    link: "",
  },
  {
    client: "LES VOIES DE L’ÊTRE",
    text: "Enola travaille avec écoute (des besoins et demandes), compétences (orientation, clarté, rendus nets, cohérents, jolis) et bonne humeur : parfait !",
    person: "Nelly GERMAIN",
    image: "",
    link: "",
  },
  {
    client: "Michel Lamarlière",
    text: "Enola a crée mon logo, mon identité visuelle et la maquette de mon site web. Ses points forts sont la créativité et l’écoute. Elle a su comprendre ce dont j’avais besoin et je suis très satisfait de son travail.",
    person: "Michel LAMARLIÈRE",
    image: "",
    link: "",
  },
  {
    client: "Michel Lamarlière",
    text: "Enola a crée mon logo, mon identité visuelle et la maquette de mon site web. Ses points forts sont la créativité et l’écoute. Elle a su comprendre ce dont j’avais besoin et je suis très satisfait de son travail.",
    person: "Michel LAMARLIÈRE",
    image: "",
    link: "",
  },
  {
    client: "Michel Lamarlière",
    text: "Enola a crée mon logo, mon identité visuelle et la maquette de mon site web. Ses points forts sont la créativité et l’écoute. Elle a su comprendre ce dont j’avais besoin et je suis très satisfait de son travail.",
    person: "Michel LAMARLIÈRE",
    image: "",
    link: "",
  },
];

const Reviews: React.FC = () => {
  const reviewsRef = useRef<null | HTMLDivElement>(null);
  const [firstReview, setFirstReview] = useState(0);

  return (
    <div className={classes.wrapper}>
      <div className={classes.title}>Quelques avis clients</div>
      <div className={classes["reviews-wrapper"]}>
        <button
          onClick={() => {
            if (reviewsRef.current) {
              reviewsRef.current.scrollBy({ left: -400, behavior: "smooth" });
            }
          }}
          className={`${classes["arrow-button"]} ${classes["arrow-button--left"]}`}
        >
          <img src={leftArrowIcon} alt={"Gauche"} />
        </button>
        <div className={classes.reviews} ref={reviewsRef}>
          {reviews.map((review) => (
            <div className={classes.reviews__item}>
              <div className={classes.reviews__item__client}>
                {review.client}
              </div>
              <div className={classes.reviews__item__text}>{review.text}</div>
              <div className={classes.reviews__item__person}>
                {review.person}
              </div>
              <div className={classes.reviews__item__image}>{review.image}</div>
              <div className={classes.reviews__item__link}>
                <a
                  className={classes.reviews__item__link}
                  href={review.link}
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Voir le profil complet
                </a>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={() => {
            if (reviewsRef.current) {
              reviewsRef.current.scrollBy({ left: 400, behavior: "smooth" });
            }
          }}
          className={`${classes["arrow-button"]} ${classes["arrow-button--right"]}`}
        >
          <img src={leftArrowIcon} alt={"Aller à droite"} />
        </button>
      </div>
    </div>
  );
};

export default Reviews;
