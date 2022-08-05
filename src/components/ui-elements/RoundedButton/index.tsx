import React from "react";

import classes from "./styles.module.scss";
import { Link } from "react-router-dom";

export enum RoundedButtonTypes {
  LINK = "link",
  BUTTON = "button",
  SUBMIT = "submit",
}

type commonProps = {
  text: string;
  className?: string;
};

type conditionalProps =
  | {
      type: RoundedButtonTypes.LINK;
      to: string;
    }
  | {
      type: RoundedButtonTypes.SUBMIT | RoundedButtonTypes.BUTTON;
    };

type Props = commonProps & conditionalProps;

const RoundedButton: React.FC<Props> = (props) => {
  if (props.type === RoundedButtonTypes.LINK) {
    return (
      <Link to={props.to} className={`${classes.wrapper} ${props.className}`}>
        {props.text}
      </Link>
    );
  }

  return (
    <button
      className={`${classes.wrapper} ${props.className}`}
      type={props.type}
    >
      {props.text}
    </button>
  );
};

export default RoundedButton;
