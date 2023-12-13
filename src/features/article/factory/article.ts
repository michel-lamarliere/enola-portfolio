import { ArticleRaw } from "features/article/types/articleRaw";
import { Article } from "features/article/types/articles";

export const ArticleFactory = (articleRaw: ArticleRaw): Article => {
  return {
    id: articleRaw.id.toString(),
    title: articleRaw.attributes.title,
    date: articleRaw.attributes.date,
    description: articleRaw.attributes.description,
    coverImage: articleRaw.attributes.cover_image?.data?.attributes?.url || "",
    tag: articleRaw.attributes.tag,
    paragraph: articleRaw.attributes.paragraph,
  };
};
