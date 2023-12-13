import { useQuery } from "@tanstack/react-query";

import { axios } from "libs/axios";
import { ArticleRaw } from "features/article/types/articleRaw";
import { Article } from "features/article/types/articles";
import { ArticleFactory } from "features/article/factory/article";

const articleQueryKeys = {
  get: "get-article",
};

type Id = string | undefined;

const getArticle = async (
  id: Id
): Promise<{
  data: ArticleRaw;
}> => {
  return await axios.get(`/articles/${id}?populate=*`);
};

const handleGetArticle = async (id: Id): Promise<Article> => {
  const responseData = await getArticle(id);

  const article = responseData.data;

  return ArticleFactory(article);
};

export const useGetArticle = (id: Id) => {
  return useQuery({
    queryKey: [articleQueryKeys.get, { id }],
    queryFn: () => handleGetArticle(id),
  });
};
