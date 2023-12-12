import { StrapiImageSingle } from "types/strapiImage";

export type ArticleRaw = {
  id: number;
  attributes: {
    title: string;
    date: any;
    description: string;
    cover_image: StrapiImageSingle;
    paragraph: any;
  };
};
