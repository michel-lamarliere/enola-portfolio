import { ProjectType } from "types/project.types";

export const transformProjectData = (data: any) => {
  const transformedData: ProjectType[] = [];
  let totalPhotos = 0;

  for (let i = 0; i < data.length; i++) {
    const transformedImages: string[] = [];
    totalPhotos = totalPhotos + data[i].attributes.images.data.length;

    for (let y = 0; y < data[i].attributes.images.data.length; y++) {
      transformedImages.push(data[i].attributes.images.data[y].attributes.url);
    }

    transformedData.push({
      name: data[i].attributes.project_name,
      description: data[i].attributes.description,
      pro: data[i].attributes.pro,
      date: data[i].attributes.date,
      showsDate: data[i].attributes.showsDate,
      images: transformedImages,
    });
  }

  return [transformedData, totalPhotos];
};
