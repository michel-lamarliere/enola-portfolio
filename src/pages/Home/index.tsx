import React from "react";

import MainContainer from "components/containers/MainContainer";
import Main from "./components/Main";

import classes from "./styles.module.scss";

const Home: React.FC = () => {
  return (
    <MainContainer>
      <div className={classes.wrapper}>
        <Main />
      </div>
    </MainContainer>
  );
};

export default Home;
