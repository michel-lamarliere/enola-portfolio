import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { RootState } from "store/store";

import Project, { SkeletonProject } from "./components/Project";

import classes from "./styles.module.scss";

const Projects: React.FC = () => {
  const projectsState = useSelector((state: RootState) => state.projects);
  const [imagesAreLoaded, setImagesAreLoaded] = useState(
    !projectsState.isEmpty || projectsState.data.length !== 0
  );
  const [loadedImages, setLoadedImages] = useState(0);

  useEffect(() => {
    /*if (loadedImages === projectsState.data.length) {
    }*/
    setTimeout(() => {
      setImagesAreLoaded(true);
    }, 1500);
  }, [projectsState.isEmpty, projectsState.data, loadedImages]);

  return (
    <div className={classes.wrapper}>
      {!imagesAreLoaded &&
        [...Array(12)].map((skeleton, index) => (
          <SkeletonProject key={index} />
        ))}
      {projectsState.data.map((project, index) => (
        <Project
          name={project.name}
          description={project.description}
          date={project.date}
          pro={project.pro}
          images={project.images}
          showsDate={project.showsDate}
          key={index}
          onLoad={() => {
            /*setLoadedImages((prev) => prev + 1);*/
          }}
        />
      ))}
    </div>
  );
};

export default Projects;