import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { RootState } from "store/store";

import Project, { SkeletonProject } from "./components/Project";

import classes from "./styles.module.scss";

const Projects: React.FC = () => {
  const projectsState = useSelector((state: RootState) => state.projects);
  const [imagesAreLoaded, setImagesAreLoaded] = useState(
    !projectsState.data || projectsState.data.length !== 0
  );
  const [loadedImages, setLoadedImages] = useState(0);

  useEffect(() => {
    if (projectsState.totalPhotos === 0) {
      return;
    }

    if (loadedImages === projectsState.totalPhotos) {
      setImagesAreLoaded(true);
    }
    setTimeout(() => {}, 1500);
  }, [projectsState.data, projectsState.totalPhotos, loadedImages]);

  return (
    <div className={classes.wrapper}>
      {!imagesAreLoaded &&
        [...Array(12)].map((skeleton, index) => (
          <SkeletonProject key={index} />
        ))}
      {projectsState.data &&
        projectsState.data.map((project, index) => (
          <Project
            name={project.name}
            description={project.description}
            date={project.date}
            pro={project.pro}
            images={project.images}
            showsDate={project.showsDate}
            dateAltText={project.dateAltText}
            key={index}
            onLoad={() => {
              setLoadedImages((prev) => prev + 1);
            }}
          />
        ))}
    </div>
  );
};

export default Projects;
