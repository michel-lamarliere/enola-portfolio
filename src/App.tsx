import React from "react";
import { Route, Routes } from "react-router-dom";

import { HomePage } from "pages/home/page/HomePage";
import { Error404Page } from "pages/error/page/Error404Page";
import { AboutMePage } from "pages/about-me/page/AboutMePage";
import { LegalNoticePage } from "pages/legal-notice/page/LegalNoticePage";
import { ProjectsPage } from "pages/projects/page/ProjectsPage";
import { Layout } from "layout/Layout";
import { routes } from "config/routes";
import { ServicesPage } from "pages/services/page";
import { BlogPage } from "pages/blog/page/BlogPage";
import { ArticlePage } from "pages/article/page";
import { AppElements } from "providers/AppElements/AppElements";

export const App = () => {
  return (
    <>
      <AppElements />
      <Layout>
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={routes.projects.pathname} element={<ProjectsPage />} />
          <Route path={routes.services.pathname} element={<ServicesPage />} />
          <Route path={routes.about.pathname} element={<AboutMePage />} />
          <Route
            path={routes.legalNotice.pathname}
            element={<LegalNoticePage />}
          />
          <Route path={routes.blog.pathname} element={<BlogPage />} />
          <Route path={routes.article.pathname} element={<ArticlePage />} />
          <Route path={"*"} element={<Error404Page />} />
        </Routes>
      </Layout>
    </>
  );
};
