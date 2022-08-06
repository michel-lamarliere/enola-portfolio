import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "./store/store";
import { CLOSE_MOBILE_MENU } from "./store/mobile-menu";

import Home from "./pages/Home";
import Error404 from "./pages/Error404";
import Layout from "components/Layout";
import MobileMenu from "./components/MobileMenu";
import Overlay from "components/ui-elements/Overlay";

const App: React.FC = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const mobileMenuState = useSelector((state: RootState) => state.mobileMenu);

  const [windowWidth, setWindowWidth] = useState(0);
  const [path, setPath] = useState("");

  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));

    if (mobileMenuState.isOpen && windowWidth > 1000) {
      dispatch(CLOSE_MOBILE_MENU());
    }
  }, [location, mobileMenuState.isOpen, windowWidth, dispatch]);

  useEffect(() => {
    if (location.pathname !== path) {
      dispatch(CLOSE_MOBILE_MENU());
    }

    setPath(location.pathname);
  }, [dispatch, location, path]);

  useEffect(() => {
    if (mobileMenuState.isOpen) {
      const root = document.getElementById("root");

      root!.style.overflow = "hidden";
      root!.style.height = "100vh";
    }

    if (!mobileMenuState.isOpen) {
      const root = document.getElementById("root");

      root!.style.overflow = "visible";
    }
  }, [mobileMenuState.isOpen]);

  return (
    <>
      <Overlay />
      <MobileMenu />
      <Layout>
        <Routes>
          <Route path={"/accueil/*"} element={<Home />} />
          <Route path="/" element={<Navigate to="/accueil" replace />} />
          {/*<Route path="/" element={<MainLayout />}>*/}
          <Route path={"*"} element={<Error404 />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
