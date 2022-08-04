import React from "react";

import classes from "./styles.module.scss";

interface Props {
  className?: string;
  type?: "button" | "submit";
  text: string;
}

const RoundedButton: React.FC<Props> = (props) => {
  return (
    <button
      className={`${classes.wrapper} ${props.className}`}
      type={props.type}
    >
      {props.text}
    </button>
  );
};

RoundedButton.defaultProps = {
  type: "button",
};

export default RoundedButton;
