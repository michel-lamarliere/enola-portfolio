import { useQuery } from "@tanstack/react-query";

import { axios } from "libs/axios";
import { ReviewRaw } from "pages/about-me/types/reviewRaw";
import { ReviewType } from "pages/about-me/types/review";

const getReviews = (): Promise<{ data: ReviewRaw[] }> => {
  return axios.get("/reviews?sort=order&populate=*");
};

const getReviewsHandler = async (): Promise<ReviewType[]> => {
  const responseData = await getReviews();

  return responseData.data?.map((review) => ({
    client: review.attributes.client,
    name: review.attributes.name,
    image: review.attributes.image.data[0].attributes.url,
    projectUrl: review.attributes.projectUrl,
    review: review.attributes.review,
  }));
};

export const useGetReviews = () => {
  return useQuery({ queryKey: ["get-reviews"], queryFn: getReviewsHandler });
};
