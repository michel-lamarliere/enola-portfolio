import React from "react";

import styles from "./ArticleTag.module.scss";

type Props = {
  text: string;
};

export const ArticleTag = ({ text }: Props) => {
  return <div className={styles.ArticleTag}>{text}</div>;
};
