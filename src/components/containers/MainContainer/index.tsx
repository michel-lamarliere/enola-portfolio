import React from "react";

import classes from "./styles.module.scss";

interface Props {
  children: JSX.Element;
}

const MainContainer: React.FC<Props> = (props) => {
  return <div className={classes.wrapper}>{props.children}</div>;
};

export default MainContainer;
