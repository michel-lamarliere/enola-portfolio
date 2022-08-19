import { ReviewType } from "types/review.types";

export const transformReviewData = (data: any) => {
  const transformedData: ReviewType[] = [];

  for (let i = 0; i < data.length; i++) {
    transformedData.push({
      client: data[i].attributes.client,
      review: data[i].attributes.review,
      name: data[i].attributes.name,
      projectUrl: data[i].attributes.projectUrl,
      image: data[i].attributes.image.data[0].attributes.url,
    });
  }

  return transformedData;
};
