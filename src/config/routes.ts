export const routes: {
  [key: string]: {
    title: string;
    hideInNavbar?: boolean;
    pathname: string;
    url: (params?: { id: string; slug: string }) => string;
    hashes?: {
      [key: string]: string;
    };
  };
} = {
  home: {
    title: "Accueil",
    pathname: "/",
    url: () => "/",
    hashes: {
      contact: "#contact",
    },
  },
  projects: {
    title: "Projets",
    pathname: "/projets",
    url: () => "/projets",
  },
  services: {
    title: "Services",
    pathname: "/services",
    url: () => "/services",
  },
  about: {
    title: "À propos",
    pathname: "/a-propos",
    url: () => "/a-propos",
  },
  blog: {
    title: "Blog",
    pathname: "/blog",
    url: () => "/blog",
  },
  article: {
    hideInNavbar: true,
    title: "Article",
    pathname: "/article/:id/:slug",
    url: (params) => `/article/${params?.id}/${params?.slug}`,
  },
  legalNotice: {
    hideInNavbar: true,
    title: "Mentions légales",
    pathname: "/mentions-legales",
    url: () => "/mentions-legales",
  },
};
