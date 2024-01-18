import React, { ReactNode } from "react";

import styles from "./ProjectStep.module.scss";

type Props = {
  image: string;
  number: number;
  title: string;
  paragraph: string | ReactNode;
};

export const ProjectStep = ({ image, paragraph, title, number }: Props) => {
  return (
    <div className={styles.ProjectStep}>
      <img className={styles.image} src={image} alt={title} />
      <div className={styles.title}>
        <div className={styles.title_number}>0{number}.</div>
        <span className={styles.title_text}>{title}</span>
      </div>
      <p className={styles.paragraph}>{paragraph}</p>
    </div>
  );
};
