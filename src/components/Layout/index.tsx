import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

interface Props {
  children: JSX.Element;
}

const Layout: React.FC<Props> = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
