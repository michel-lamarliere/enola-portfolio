import React from 'react';
import {useSelector} from "react-redux";

import {RootState} from "store/store";

import Project from "./components/Project";

import classes from './styles.module.scss';

const Projects: React.FC = () => {
  const projectsState = useSelector((state: RootState) => state.projects);
  
  return (
    <div className={classes.wrapper}>
      {projectsState.data.map((project, index) => (
        <Project name={project.name} description={project.description}
                 date={project.date} pro={project.pro} images={project.images}
                 key={index}/>
      ))}
    </div>
  )
}

export default Projects;
