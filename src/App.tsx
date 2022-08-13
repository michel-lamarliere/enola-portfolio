import React, {useEffect, useState} from "react";
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {RootState} from "store/store";
import {CLOSE_MOBILE_MENU} from "store/mobile-menu";
import {Project, SET_PROJECTS} from "store/projects";
import {Review, SET_REVIEWS} from "store/reviews";

import Home from "pages/Home";
import Error404 from "pages/Error404";
import About from "pages/About";
import Legal from "pages/Legal";
import Projects from "pages/Projects";

import Layout from "components/Layout";
import MobileMenu from "components/MobileMenu";
import Overlay from "components/ui-elements/Overlay";

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

    const curatedData: Review[] = [];
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


  };

  const getProjects = async () => {
    if (!projectsState.isEmpty) {
      return;
    }

    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/api/projects?populate=*`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const responseData = await response.json();

    const curatedData: Project[] = [];
    for (let i = 0; i < responseData.data.length; i++) {

      const curatedImages: string[] = [];
      for (let y = 0; y < responseData.data[i].attributes.images.data.length; y++) {
        curatedImages.push(responseData.data[i].attributes.images.data[y].attributes.url)
      }
      curatedData.push({
        name: responseData.data[i].attributes.project_name,
        description: responseData.data[i].attributes.description,
        pro: responseData.data[i].attributes.pro,
        date: responseData.data[i].attributes.date,
        images: curatedImages
      })
    }

    dispatch(SET_PROJECTS(curatedData));
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
          <Route path={'/projets'} element={<Projects/>}/>
          <Route path={"/a-propos"} element={<About/>}/>
          <Route path={"/mentions-legales"} element={<Legal/>}/>
          <Route path={"*"} element={<Error404/>}/>
        </Routes>
      </Layout>
    </>
  );
};

export default App;
