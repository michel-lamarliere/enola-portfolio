import React, { useEffect, useState } from "react";

import { Overlay } from "components/Overlay";
import { MobileMenu } from "layout/Header/MobileMenu";
import { ScrollToTop } from "providers/AppElements/ScrollToTop";
import { useLocation } from "react-router-dom";
import { useMobileMenuStore } from "store/mobileMenu";
import { useProjectModalStore } from "pages/projects/store/project-modal";

export const AppElements = () => {
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
    </>
  );
};
