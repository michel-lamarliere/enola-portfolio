import { FC } from "react";

import { useProjectModalStore } from "pages/projects/store/project-modal";
import { ProjectType } from "pages/projects/types/project";

import closeIcon from "assets/icons/close-button.svg";

import styles from "./ProjectModal.module.scss";

export const ProjectModal: FC<Pick<ProjectType, "images">> = ({ images }) => {
  const projectModal = useProjectModalStore((state) => state);

  return (
    <div className={styles.wrapper} onClick={() => projectModal.close()}>
      <button className={styles.button} onClick={() => projectModal.close()}>
        <img
          src={closeIcon}
          alt={"Fermer projet"}
          className={styles.button_img}
        />
      </button>
      <div
        className={styles.imageContainer}
        onClick={(event) => event.stopPropagation()}
      >
        {images?.map((image, index) => (
          <img
            className={styles.image}
            key={`project-${image}-${index}`}
            src={image}
            alt={`projet-${image}-${index}`}
          />
        ))}
      </div>
    </div>
  );
};
