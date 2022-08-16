import React from "react";

import Main from "./components/Main";
import Services from "./components/Services";
import Contact from "./components/Contact";

const Home: React.FC = () => {
  return (
    <div>
      <Main />
      <Services />
      <Contact />
    </div>
  );
};

export default Home;
