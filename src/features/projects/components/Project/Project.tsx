import React, { FC } from "react";
import ContentLoader from "react-content-loader";

import { ProjectType } from "features/projects/types/project";
import RoundedButton, {
  RoundedButtonTypes,
} from "components/uiElements/RoundedButton/RoundedButton";
import { useProjectModalStore } from "features/projects/store/project-modal";

import classes from "features/projects/components/Project/Project.module.scss";

export const SkeletonProject: FC = () => {
  return (
    <ContentLoader
      className={classes.wrapper}
      speed={2}
      height={"100%"}
      backgroundColor="#F3F2F7"
      foregroundColor="rgba(255, 150, 214, 0.2)"
    >
      <rect className={classes.skeleton_name} rx="3" ry="3" />
      <rect className={classes.skeleton_description} rx="3" ry="3" />
    </ContentLoader>
  );
};

const Project: FC<Omit<ProjectType, "id">> = ({
  name,
  description,
  coverImage,
  images,
}) => {
  const projectModal = useProjectModalStore((state) => state);

  const clickHandler = () => {
    projectModal.open(images);
  };

  return (
    <div className={classes.wrapper} onClick={clickHandler}>
      <div className={classes.header}>
        <div className={classes.header_title}>{name}</div>
        <div className={classes.header_description}>{description}</div>
      </div>
      <img className={classes.img} src={coverImage} alt={name} />
      <RoundedButton
        className={classes.button}
        text="Voir le project"
        type={RoundedButtonTypes.BUTTON}
        onClick={clickHandler}
      />
    </div>
  );
};

export default Project;
