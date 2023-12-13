import React from "react";

import { Articles } from "features/article/components/Articles/Articles";

import styles from "./BlogPage.module.scss";

export const BlogPage = () => {
  return (
    <div className={styles.BlogPage}>
      <div className={styles.content}>
        <Articles />
      </div>
    </div>
  );
};
