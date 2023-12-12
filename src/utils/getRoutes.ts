import { routes } from "config/routes";

export const getRoutes = () => {
  return Object.values(routes)
    .filter((route) => !route.hideInNavbar)
    .map((route) => route);
};
