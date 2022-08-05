import React from "react";

import Main from "./components/Main";
import Services from "./components/Services";
import Contact from "./components/Contact";

import classes from "./styles.module.scss";

const Home: React.FC = () => {
  return (
    <div className={classes.wrapper}>
      <Main />
      <Services />
      <Contact />
    </div>
  );
};

export default Home;
