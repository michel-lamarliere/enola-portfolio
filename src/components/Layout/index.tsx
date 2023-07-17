import React from "react";

import Header from "components/Layout/components/Header/Header";
import Footer from "components/Layout/components/Footer/Footer";

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
