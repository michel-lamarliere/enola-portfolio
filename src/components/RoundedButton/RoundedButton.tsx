import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";

import styles from "./RoundedButton.module.scss";

export enum RoundedButtonTypes {
  ANCHOR = "anchor",
  LINK = "link",
  BUTTON = "button",
  SUBMIT = "submit",
}

type CommonProps = {
  text: string;
  className?: string;
};

type ConditionalProps =
  | {
      type: RoundedButtonTypes.LINK;
      to: string;

      onClick?: never;
      href?: never;
      download?: never;
      disabled?: never;
    }
  | {
      type: RoundedButtonTypes.SUBMIT | RoundedButtonTypes.BUTTON;
      onClick: (event: any) => void;
      disabled?: boolean;

      to?: never;
      href?: never;
      download?: never;
    }
  | {
      type: RoundedButtonTypes.ANCHOR;
      href: string;
      download?: boolean;

      onClick?: never;
      disabled?: never;
      to?: never;
    };

type Props = CommonProps & ConditionalProps;

export const RoundedButton = ({
  type,
  text,
  className,
  onClick,
  to,
  href,
  download,
  disabled,
}: Props) => {
  const wrapperStyles = cn(styles.wrapper, {
    [`${className}`]: className,
  });

  if (type === RoundedButtonTypes.LINK) {
    return (
      <Link to={to} className={wrapperStyles}>
        {text}
      </Link>
    );
  }

  if (type === RoundedButtonTypes.ANCHOR) {
    return (
      <a
        className={wrapperStyles}
        href={href}
        target={"_blank"}
        rel="noreferrer"
        download={download}
      >
        {text}
      </a>
    );
  }

  return (
    <button
      disabled={disabled}
      className={wrapperStyles}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
