import React from "react";
import cn from "classnames";

import styles from "pages/home/components/Contact/Input/Input.module.scss";

export enum InputTypes {
  TEXT = "text",
  TEXTAREA = "textarea",
}

type Props = {
  type: InputTypes;
  name: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent) => void;
  onBlur: (event: React.FocusEvent) => void;
  touched: boolean;
  errorText: string;
};

export const Input = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  onBlur,
  touched,
  errorText,
}: Props) => {
  const showError = touched && errorText.length > 0;

  let content;

  switch (type) {
    case InputTypes.TEXT:
      content = (
        <input
          className={cn(styles.text, {
            [styles.text__error]: showError,
          })}
          type={"text"}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          id={name}
        />
      );
      break;
    case InputTypes.TEXTAREA:
      content = (
        <textarea
          className={cn(styles.textarea, {
            [styles.textarea__error]: showError,
          })}
          rows={6}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          id={name}
        />
      );
      break;
  }

  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} />
      {content}
      <div className={styles.errorText}>{showError && errorText}</div>
    </div>
  );
};
