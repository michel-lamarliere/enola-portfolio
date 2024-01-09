import { FC } from "react";

import { useProjectModalStore } from "pages/projects/store/project-modal";
import { ProjectType } from "pages/projects/types/project";

import closeIcon from "assets/icons/close-button.svg";

import classes from "pages/projects/components/ProjectModal/ProjectModal.module.scss";

export const ProjectModal: FC<Pick<ProjectType, "images">> = ({ images }) => {
  const projectModal = useProjectModalStore((state) => state);

  return (
    <div className={classes.wrapper} onClick={() => projectModal.close()}>
      <button className={classes.button} onClick={() => projectModal.close()}>
        <img
          src={closeIcon}
          alt={"Fermer projet"}
          className={classes.button_img}
        />
      </button>
      <div
        className={classes.imageContainer}
        onClick={(event) => event.stopPropagation()}
      >
        {images?.map((image, index) => (
          <img
            className={classes.image}
            key={`project-${image}-${index}`}
            src={image}
            alt={`projet-${image}-${index}`}
          />
        ))}
      </div>
    </div>
  );
};
