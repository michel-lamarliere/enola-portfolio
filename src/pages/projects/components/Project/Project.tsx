import React from "react";
import ContentLoader from "react-content-loader";

import { ProjectType } from "pages/projects/types/project";
import {
  RoundedButton,
  RoundedButtonTypes,
} from "components/RoundedButton/RoundedButton";
import { useProjectModalStore } from "pages/projects/store/project-modal";

import styles from "pages/projects/components/Project/Project.module.scss";

export const SkeletonProject = () => {
  return (
    <ContentLoader
      className={styles.wrapper}
      speed={2}
      height={"100%"}
      backgroundColor="#F3F2F7"
      foregroundColor="rgba(255, 150, 214, 0.2)"
    >
      <rect className={styles.skeleton_name} rx="3" ry="3" />
      <rect className={styles.skeleton_description} rx="3" ry="3" />
    </ContentLoader>
  );
};

export const Project = ({
  name,
  description,
  coverImage,
  images,
}: Omit<ProjectType, "id">) => {
  const projectModal = useProjectModalStore((state) => state);

  const clickHandler = () => projectModal.open(images);

  return (
    <div className={styles.wrapper} onClick={clickHandler}>
      <div className={styles.header}>
        <div className={styles.header_title}>{name}</div>
        <div className={styles.header_description}>{description}</div>
      </div>
      <img className={styles.img} src={coverImage} alt={name} />
      <RoundedButton
        className={styles.button}
        text="Voir le projet"
        type={RoundedButtonTypes.BUTTON}
        onClick={clickHandler}
      />
    </div>
  );
};
