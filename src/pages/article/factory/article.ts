import slugify from "slugify";

import { ArticleRaw } from "pages/article/types/articleRaw";
import { Article } from "pages/article/types/articles";

export const ArticleFactory = (articleRaw: ArticleRaw): Article => {
  return {
    id: articleRaw.id.toString(),
    slug: slugify(articleRaw.attributes.title, {
      lower: true,
    }),
    title: articleRaw.attributes.title,
    date: articleRaw.attributes.date,
    description: articleRaw.attributes.description,
    coverImage: articleRaw.attributes.cover_image?.data?.attributes?.url || "",
    tag: articleRaw.attributes.tag,
    paragraph: articleRaw.attributes.paragraph,
  };
};
