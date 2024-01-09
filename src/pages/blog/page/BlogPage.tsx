import React from "react";

import { Articles } from "pages/article/components/Articles/Articles";

import styles from "pages/blog/page/BlogPage.module.scss";

export const BlogPage = () => {
  return (
    <div className={styles.BlogPage}>
      <div className={styles.content}>
        <Articles />
      </div>
    </div>
  );
};
