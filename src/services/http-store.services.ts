import { transformProjectData } from "../utils/transform-project-data";
import { SET_REVIEWS } from "../store/reviews";
import { useDispatch } from "react-redux";
import { transformReviewData } from "../utils/transform-review-data";
import { SET_PROJECTS } from "../store/projects";

export const useHttp = () => {
  const dispatch = useDispatch();

  class Http {
    static async sendRequest(params: {
      url: string;
      body?: string;
      method: "GET" | "POST";
    }) {
      const response = await fetch(params.url, {
        method: params.method,
        headers: {
          "Content-Type": "application/json",
        },
        body: params.body,
      });

      return { response, responseData: await response.json() };
    }

    static async getAndStoreReviews() {
      const { response, responseData } = await this.sendRequest({
        url: `${process.env.REACT_APP_BACKEND_URL}/api/reviews?populate=*`,
        method: "GET",
      });

      if (!response.ok) {
        return;
      }

      const transformedData = transformReviewData(responseData.data);

      dispatch(SET_REVIEWS(transformedData));
    }

    static async getAndStoreProjects() {
      const { response, responseData } = await this.sendRequest({
        url: `${process.env.REACT_APP_BACKEND_URL}/api/projects?sort=order&populate=*`,
        method: "GET",
      });

      if (!response.ok) {
        return;
      }

      const [transformedData, totalPhotos] = transformProjectData(
        responseData.data
      );

      dispatch(
        SET_PROJECTS({ data: transformedData, totalPhotos: totalPhotos })
      );
    }
  }

  return { Http };
};
