import { transformProjectData } from "../utils/transform-project-data";
import { SET_REVIEWS } from "../store/reviews";
import { useDispatch } from "react-redux";
import { transformReviewData } from "../utils/transform-review-data";
import { SET_PROJECTS } from "../store/projects";

export const useHttp = () => {
  const dispatch = useDispatch();

  class Http {
    static async sendRequest(params: { url: string }) {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}${params.url}?populate=*`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      return { response, responseData: await response.json() };
    }

    static async getAndStoreReviews() {
      const { response, responseData } = await this.sendRequest({
        url: "/api/reviews",
      });

      if (!response.ok) {
        return;
      }

      const transformedData = transformReviewData(responseData.data);

      dispatch(SET_REVIEWS(transformedData));
    }

    static async getAndStoreProjects() {
      const { response, responseData } = await this.sendRequest({
        url: "/api/projects",
      });

      if (!response.ok) {
        return;
      }

      const transformedData = transformProjectData(responseData.data);

      dispatch(SET_PROJECTS(transformedData));
    }
  }

  return { Http };
};
