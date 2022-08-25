import { useDispatch, useSelector } from "react-redux";

import { RootState } from "store/store";
import { SET_PROJECTS } from "store/projects";
import { SET_REVIEWS } from "store/reviews";
import { SET_TOKEN } from "store/auth";

import { transformProjectData } from "utils/transform-project-data";
import { transformReviewData } from "utils/transform-review-data";
import { SET_RESUME_URL } from "../store/resume";

export const useHttp = () => {
  const dispatch = useDispatch();

  const token = useSelector((state: RootState) => state.auth.token);

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
          authorization: `Bearer ${token || ""}`,
        },
        body: params.body,
      });

      return { response, responseData: await response.json() };
    }

    static async submitForm(body: {
      language: "french" | "english";
      name: string;
      email: string;
      message: string;
    }) {
      const { response } = await this.sendRequest({
        url: "https://forms-backend1.herokuapp.com/enola-portfolio/form",
        method: "POST",
        body: JSON.stringify(body),
      });

      return response;
    }

    static async getToken() {
      const { response, responseData } = await this.sendRequest({
        url: "https://forms-backend1.herokuapp.com/enola-portfolio/auth",
        method: "GET",
      });

      if (!response.ok) {
        return;
      }

      dispatch(SET_TOKEN(responseData.token));
    }

    static async getResume() {
      const { response, responseData } = await this.sendRequest({
        url: `${process.env.REACT_APP_BACKEND_URL}/api/cv?populate=*`,
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
