import React, { useCallback, useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "store/store";
import { CLOSE_MOBILE_MENU } from "store/mobile-menu";

import { useHttp } from "services/http-store.services";

import Home from "pages/Home";
import Error404 from "pages/Error404";
import About from "pages/About";
import Legal from "pages/Legal";
import Projects from "pages/Projects";

import Layout from "components/Layout";
import MobileMenu from "components/MobileMenu";
import Overlay from "components/ui-elements/Overlay";

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
  const dispatch = useDispatch();

  const { Http } = useHttp();

  const mobileMenuState = useSelector((state: RootState) => state.mobileMenu);

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));

    if (mobileMenuState.isOpen && windowWidth > 1000) {
      dispatch(CLOSE_MOBILE_MENU());
    }
  }, [location, mobileMenuState.isOpen, windowWidth, dispatch]);

  useEffect(() => {
    dispatch(CLOSE_MOBILE_MENU());
  }, [location, dispatch]);

  useEffect(() => {
    if (mobileMenuState.isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
    }

    if (!mobileMenuState.isOpen) {
      document.body.style.overflow = "visible";
      document.body.style.height = "auto";
    }
  }, [mobileMenuState.isOpen]);

  const getAllData = useCallback(async () => {
    await Http.getToken();

    Http.getResume();
    Http.getAndStoreReviews();
    Http.getAndStoreProjects();
  }, [Http]);

  useEffect(() => {
    getAllData();
  }, [getAllData]);

  return (
    <>
      <ScrollToTop />
      <Overlay />
      <MobileMenu />
      <Layout>
        <Routes>
          <Route path={"/accueil/*"} element={<Home />} />
          <Route
            path="/"
            element={<Navigate to="/accueil" replace state={{ location }} />}
          />
          <Route path={"/projets"} element={<Projects />} />
          <Route path={"/a-propos"} element={<About />} />
          <Route path={"/mentions-legales"} element={<Legal />} />
          <Route path={"*"} element={<Error404 />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
