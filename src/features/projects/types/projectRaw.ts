import { StrapiImageMultiple, StrapiImageSingle } from "types/strapiImage";

export type ProjectRaw = {
  id: number;
  attributes: {
    name: string;
    description: string;
    cover_image: StrapiImageSingle;
    images: StrapiImageMultiple;
  };
};
