import React from "react";

import { Articles } from "pages/article/components/Articles/Articles";
import { Container } from "components/Container";

import styles from "./BlogPage.module.scss";

export const BlogPage = () => {
  return (
    <Container>
      <div className={styles.BlogPage}>
        <div className={styles.content}>
          <Articles />
        </div>
      </div>
    </Container>
  );
};
