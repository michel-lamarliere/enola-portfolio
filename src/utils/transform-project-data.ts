import {Project} from "../store/projects";

export const transformProjectData = (data: any) => {
  const transformedData: Project[] = [];

  for (let i = 0; i < data.length; i++) {
    const transformedImages: string[] = [];

    for (let y = 0; y < data[i].attributes.images.data.length; y++) {
      transformedImages.push(data[i].attributes.images.data[y].attributes.url)
    }

    transformedData.push({
      name: data[i].attributes.project_name,
      description: data[i].attributes.description,
      pro: data[i].attributes.pro,
      date: data[i].attributes.date,
      images: transformedImages
    })
  }

  return transformedData;
}
