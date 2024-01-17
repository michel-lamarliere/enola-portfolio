import React, { ReactNode } from "react";
import cn from "classnames";

import styles from "./Container.module.scss";

type Props = {
  variant?: "md" | "lg";
  children: ReactNode;
};

export const Container = ({ children, variant = "lg" }: Props) => {
  return (
    <div
      className={cn(styles.Container, {
        [styles.Container___md]: variant === "md",
        [styles.Container___lg]: variant === "lg",
      })}
    >
      {children}
    </div>
  );
};
