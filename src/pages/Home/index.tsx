import React from "react";

import Main from "pages/Home/Main/Main";
import Services from "pages/Home/Services/Services";
import Contact from "features/contact/components/Contact/Contact";

const Home: React.FC = () => {
  return (
    <>
      <Main />
      <Services />
      <Contact />
    </>
  );
};

export default Home;
