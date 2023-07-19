export type StrapiImageSingle = {
  data: {
    attributes: {
      url: string;
    };
  };
};

export type StrapiImageMultiple = {
  data: {
    attributes: {
      name: string;
      url: string;
    };
  }[];
};
