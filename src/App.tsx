import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Home from "pages/Home";
import Error404 from "pages/Error404/Error404";
import About from "pages/About/About";
import Legal from "pages/Legal/Legal";
import ProjectsPage from "features/projects/page/ProjectsPage";
import Layout from "components/Layout";
import MobileMenu from "components/MobileMenu/MobileMenu";
import Overlay from "components/uiElements/Overlay/Overlay";
import { useProjectModalStore } from "features/projects/store/project-modal";
import { useMobileMenuStore } from "store/mobileMenu";
import { routes } from "config/routes";
import { ServicesPage } from "features/services/page";
import { BlogPage } from "features/blog/page/BlogPage";
import { ArticlePage } from "features/article/page";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const [pathName, setPathName] = useState(pathname);

  useEffect(() => {
    if (pathname !== pathName) {
      window.scrollTo(0, 0);
    }
    setPathName(pathname);
  }, [pathName, pathname]);

  return null;
};

const App: React.FC = () => {
  const location = useLocation();
  const mobileMenu = useMobileMenuStore((state) => state);
  const projectModal = useProjectModalStore((state) => state);

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));

    if (mobileMenu.isOpen && windowWidth > 1000) {
      mobileMenu.close();
    }
  }, [location, mobileMenu.isOpen, windowWidth]);

  useEffect(() => {
    document.body.style.overflow = projectModal.isOpen ? "hidden" : "visible";
  }, [projectModal.isOpen]);

  useEffect(() => {
    mobileMenu.close();
  }, [location]);

  useEffect(() => {
    if (mobileMenu.isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
    }

    if (!mobileMenu.isOpen) {
      document.body.style.overflow = "visible";
      document.body.style.height = "auto";
    }
  }, [mobileMenu.isOpen]);

  return (
    <>
      <ScrollToTop />
      <Overlay />
      <MobileMenu />
      <Layout>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={routes.projects.pathname} element={<ProjectsPage />} />
          <Route path={routes.services.pathname} element={<ServicesPage />} />
          <Route path={routes.about.pathname} element={<About />} />
          <Route path={routes.legalNotice.pathname} element={<Legal />} />
          <Route path={routes.blog.pathname} element={<BlogPage />} />
          <Route path={routes.article.pathname} element={<ArticlePage />} />
          <Route path={"*"} element={<Error404 />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
