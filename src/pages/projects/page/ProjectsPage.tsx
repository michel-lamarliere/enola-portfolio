import React from "react";

import {
  Project,
  SkeletonProject,
} from "pages/projects/components/Project/Project";
import { useGetProjects } from "pages/projects/api/getProjects";
import { ProjectModal } from "pages/projects/components/ProjectModal";
import { useProjectModalStore } from "pages/projects/store/project-modal";
import { Container } from "components/Container";

import styles from "pages/projects/page/ProjectsPage.module.scss";

export const ProjectsPage = () => {
  const { data, isLoading } = useGetProjects();
  const projectModal = useProjectModalStore((state) => state);

  return (
    <Container>
      <div className={styles.wrapper}>
        {isLoading &&
          [...Array(12)].map((skeleton, index) => (
            <SkeletonProject key={index} />
          ))}
        {data?.map((project, index) => (
          <Project
            name={project.name}
            description={project.description}
            coverImage={project.coverImage}
            images={project.images}
            key={`project-${project.name}-${project.id}`}
          />
        ))}
        {projectModal.isOpen && (
          <ProjectModal images={projectModal.imagesUrl} />
        )}
      </div>
    </Container>
  );
};
