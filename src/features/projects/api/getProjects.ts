import { useQuery } from "@tanstack/react-query";

import { axios } from "libs/axios";
import { ProjectRaw } from "features/projects/types/projectRaw";
import { ProjectType } from "features/projects/types/project";

const projectQueryKeys = {
  get: "get-projects",
};

const getProjects = async (): Promise<{
  data: ProjectRaw[];
}> => {
  return await axios.get("/projects?sort=order&populate=*");
};

const handleGetProjects = async (): Promise<ProjectType[]> => {
  const responseData = await getProjects();

  return responseData.data?.map((project) => ({
    id: project.id,
    name: project.attributes.name || "Project",
    description: project.attributes.description,
    coverImage: project.attributes.cover_image?.data?.attributes?.url || "",
    images: project.attributes.images.data
      .sort((a, b) => a.attributes.name.localeCompare(b.attributes.name))
      ?.map((image) => image.attributes.url),
  }));
};

export const useGetProjects = () => {
  return useQuery([projectQueryKeys.get], handleGetProjects);
};
