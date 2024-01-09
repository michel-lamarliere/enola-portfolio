export type ReviewRaw = {
  attributes: {
    client: string;
    review: string;
    name: string;
    image: {
      data: {
        attributes: {
          url: string;
        };
      }[];
    };
    projectUrl: string;
  };
};
