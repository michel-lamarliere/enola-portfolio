import React from "react";
import { Link } from "react-router-dom";

import classes from "./styles.module.scss";

export enum RoundedButtonTypes {
  ANCHOR = "anchor",
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
      onClick: (event: any) => void;
      disabled?: boolean;
    }
  | {
      type: RoundedButtonTypes.ANCHOR;
      href: string;
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

  if (props.type === RoundedButtonTypes.ANCHOR) {
    return (
      <a
        className={`${classes.wrapper} ${props.className}`}
        href={props.href}
        target={"_blank"}
        rel="noreferrer"
      >
        {props.text}
      </a>
    );
  }

  return (
    <button
      disabled={props.disabled}
      className={`${classes.wrapper} ${props.className}`}
      type={props.type}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default RoundedButton;
