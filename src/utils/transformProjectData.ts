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

    transformedImages.sort((a, b) => {
      if (a < b) {
        return -1;
      } else {
        return 1;
      }
    });

    transformedData.push({
      name: data[i].attributes.projectName,
      description: data[i].attributes.description,
      images: transformedImages,
    });
  }

  return [transformedData, totalPhotos];
};
