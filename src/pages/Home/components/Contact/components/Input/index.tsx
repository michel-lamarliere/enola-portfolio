import React from "react";

import classes from "./styles.module.scss";

export enum InputTypes {
  TEXT = "text",
  TEXTAREA = "textarea",
}

interface Props {
  type: InputTypes;
  name: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent) => void;
  onBlur: (event: React.FocusEvent) => void;
  touched: boolean;
  errorText: string;
}

const Input: React.FC<Props> = (props) => {
  const showError = props.touched && props.errorText.length > 0;

  let content;

  switch (props.type) {
    case InputTypes.TEXT:
      content = (
        <input
          className={`${classes.text} ${showError && classes["text--error"]}`}
          type={"text"}
          name={props.name}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          onBlur={props.onBlur}
          id={props.name}
        />
      );
      break;
    case InputTypes.TEXTAREA:
      content = (
        <textarea
          className={`${classes.textarea} ${
            showError && classes["textarea--error"]
          }`}
          rows={6}
          name={props.name}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          onBlur={props.onBlur}
          id={props.name}
        />
      );
      break;
  }

  return (
    <div className={classes.wrapper}>
      <label htmlFor={props.name} />
      {content}
      <div className={classes["error-text"]}>
        {showError && props.errorText}
      </div>
    </div>
  );
};

export default Input;
