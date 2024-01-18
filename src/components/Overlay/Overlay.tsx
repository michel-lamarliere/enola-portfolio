import React from "react";
import { animated, useTransition } from "react-spring";

import { useProjectModalStore } from "pages/projects/store/project-modal";
import { useMobileMenuStore } from "store/mobileMenu";

import styles from "./Overlay.module.scss";

export const Overlay = () => {
  const mobileMenu = useMobileMenuStore((state) => state);
  const projectModal = useProjectModalStore((state) => state);

  const transition = useTransition(mobileMenu.isOpen, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const clickHandler = () => {
    if (projectModal.isOpen) {
      projectModal.close();
    }
    if (mobileMenu.isOpen) {
      mobileMenu.close();
    }
  };

  return transition(
    (style, item) =>
      item && (
        <animated.div
          onClick={clickHandler}
          className={styles.wrapper}
          style={style}
        />
      )
  );
};
