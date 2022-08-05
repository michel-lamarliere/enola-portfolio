import React from "react";

import classes from "./styles.module.scss";

export enum InputTypes {
  TEXT = "text",
  TEXTAREA = "textarea",
}

interface Props {
  placeholder: string;
}

const Input: React.FC<Props> = (props) => {
  return (
    <div className={classes.wrapper}>
      <input type={"text"} placeholder={props.placeholder} />
    </div>
  );
};

export default Input;
