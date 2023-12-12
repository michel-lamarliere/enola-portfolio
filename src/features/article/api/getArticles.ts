import { useQuery } from "@tanstack/react-query";

import { axios } from "libs/axios";
import { ArticleRaw } from "features/article/types/articleRaw";
import { Article } from "features/article/types/articles";
import { ArticleFactory } from "features/article/factory/article";

const articlesQueryKeys = {
  get: "get-articles",
};

const getArticles = async (): Promise<{
  data: ArticleRaw[];
}> => {
  return await axios.get("/articles?sort=date&populate=*");
};

const handleGetArticles = async (): Promise<Article[]> => {
  const responseData = await getArticles();

  return responseData.data?.map((article) => ArticleFactory(article));
};

export const useGetArticles = (limit?: number) => {
  return useQuery({
    queryKey: [articlesQueryKeys.get],
    queryFn: handleGetArticles,
  });
};
