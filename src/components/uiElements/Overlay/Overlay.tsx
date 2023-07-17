import React from "react";
import { animated, useTransition } from "react-spring";

import { useProjectModalStore } from "features/projects/store/project-modal";
import { useMobileMenuStore } from "store/mobileMenu";

import classes from "components/uiElements/Overlay/Overlay.module.scss";

const Overlay: React.FC = () => {
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
    (styles, item) =>
      item && (
        <animated.div
          onClick={clickHandler}
          className={classes.wrapper}
          style={styles}
        />
      )
  );
};

export default Overlay;
