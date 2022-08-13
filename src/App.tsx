import React, {useEffect, useState} from "react";
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {RootState} from "./store/store";
import {CLOSE_MOBILE_MENU} from "./store/mobile-menu";

import Home from "./pages/Home";
import Error404 from "./pages/Error404";
import About from "./pages/About";
import Legal from "./pages/Legal";

import Layout from "components/Layout";
import MobileMenu from "./components/MobileMenu";
import Overlay from "components/ui-elements/Overlay";
import {SET_PROJECTS} from "./store/projects";
import {SET_REVIEWS} from "./store/reviews";

const ScrollToTop = () => {
  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const mobileMenuState = useSelector((state: RootState) => state.mobileMenu);
  const reviewsState = useSelector((state: RootState) => state.reviews);
  const projectsState = useSelector((state: RootState) => state.projects);

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

  const getReviews = async () => {
    if (!reviewsState.isEmpty) {
      return;
    }
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/api/reviews?populate=*`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const responseData = await response.json();

    console.log(responseData)

    const curatedData = [];
    for (let i = 0; i < responseData.data.length; i++) {
      curatedData.push({
        client: responseData.data[i].attributes.client,
        review: responseData.data[i].attributes.review,
        name: responseData.data[i].attributes.name,
        url: responseData.data[i].attributes.url,
        image: responseData.data[i].attributes.image.data[0].attributes.url
      })
    }

    dispatch(SET_REVIEWS(curatedData));

    console.log(curatedData)
  };

  const getProjects = async () => {
    if (!projectsState.isEmpty) {
      return;
    }
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/api/projects`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const responseData = await response.json();

    dispatch(SET_PROJECTS(responseData.data));
  };

  useEffect(() => {
    getReviews();
    getProjects()
  }, [projectsState.isEmpty, reviewsState.isEmpty]);

  return (
    <>
      <ScrollToTop/>
      <Overlay/>
      <MobileMenu/>
      <Layout>
        <Routes>
          <Route path={"/accueil/*"} element={<Home/>}/>
          <Route
            path="/"
            element={<Navigate to="/accueil" replace state={{location}}/>}
          />
          <Route path={"/a-propos"} element={<About/>}/>
          <Route path={"/mentions-legales"} element={<Legal/>}/>
          <Route path={"*"} element={<Error404/>}/>
        </Routes>
      </Layout>
    </>
  );
};

export default App;
