import React from "react";

import Header from "components/Layout/Header/Header";
import Footer from "components/Layout/Footer/Footer";

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
