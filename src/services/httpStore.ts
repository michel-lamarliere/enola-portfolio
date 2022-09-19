import { useDispatch } from "react-redux";
import { SET_PROJECTS } from "store/projects";
import { SET_REVIEWS } from "store/reviews";
import { SET_TOKEN } from "store/auth";
import { SET_RESUME_URL } from "store/resume";

import { transformProjectData } from "utils/transformProjectData";
import { transformReviewData } from "utils/transformReviewData";

export const useHttp = () => {
  const dispatch = useDispatch();

  class Http {
    static async sendStrapiRequest(params: {
      url: string;
      method: "GET" | "POST";
      body?: string;
    }) {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}${params.url}`,
        {
          method: params.method,
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${process.env.REACT_APP_STRAPI_TOKEN}`,
          },
          body: params.body,
        }
      );

      /*console.log(response);
      console.log(await response.json());*/

      return { response, responseData: await response.json() };
    }

    static async submitForm(body: {
      language: "french" | "english";
      name: string;
      email: string;
      message: string;
    }) {
      const { response } = await this.sendStrapiRequest({
        url: "/form",
        method: "POST",
        body: JSON.stringify(body),
      });

      return response;
    }

    static async getFormBackendToken() {
      const { response, responseData } = await this.sendStrapiRequest({
        url: "/auth",
        method: "GET",
      });

      console.log(response);

      if (!response.ok) {
        return;
      }

      dispatch(SET_TOKEN(responseData.token));
    }

    static async getResume() {
      const { response, responseData } = await this.sendStrapiRequest({
        url: "/cv?populate=*",
        method: "GET",
      });

      if (!response.ok) {
        return;
      }

      dispatch(
        SET_RESUME_URL(responseData.data.attributes.cv.data.attributes.url)
      );
    }

    static async getAndStoreReviews() {
      const { response, responseData } = await this.sendStrapiRequest({
        url: "/reviews?populate=*",
        method: "GET",
      });

      if (!response.ok) {
        return;
      }

      const transformedData = transformReviewData(responseData.data);

      dispatch(SET_REVIEWS(transformedData));
    }

    static async getAndStoreProjects() {
      const { response, responseData } = await this.sendStrapiRequest({
        url: "/projects?sort=order&populate=*",
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
