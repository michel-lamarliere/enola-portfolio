import React from "react";

import Header from "./components/Header";

interface Props {
  children: JSX.Element;
}

const Layout: React.FC<Props> = (props) => {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
};

export default Layout;
