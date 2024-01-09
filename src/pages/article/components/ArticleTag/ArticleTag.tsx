import React from "react";

import styles from "pages/article/components/ArticleTag/ArticleTag.module.scss";

type Props = {
  text: string;
};

export const ArticleTag = ({ text }: Props) => {
  return <div className={styles.ArticleTag}>{text}</div>;
};
