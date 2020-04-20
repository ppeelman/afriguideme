import React, { ChangeEvent, FunctionComponent, useState } from "react";

import { Styled } from "./TextArea.styles";

interface TextFieldProps {
  id: string;
  name: string;
  label: string;
  rows: number;
  cols: number;
  required?: boolean;
  autofocus?: boolean;
  minLength: number;
  maxLength: number;
  defaultValue?: any;
}

const TextArea: FunctionComponent<TextFieldProps> = (props: TextFieldProps) => {
  const { id, name, label, rows, cols, minLength, maxLength, required, autofocus, defaultValue } = props;

  const [value, updateValue] = useState<any>(defaultValue);
  const [errorMessage, setErrorMessage] = useState<any>(null);
  const [placeholderShown, togglePlaceholderShown] = useState(true);

  const handleChange = (event: ChangeEvent) => {
    const target = event?.target as HTMLInputElement;
    const value = target?.value;

    updateValue(value);
    togglePlaceholderShown(!Boolean(value));
  };

  return (
    <Styled.TextField>
      <Styled.TextArea
        id={id}
        name={name}
        value={value}
        rows={rows}
        cols={cols}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        onChange={handleChange}
        placeholder={label}
        autoFocus={autofocus}
      />
      <Styled.Label isVisible={!placeholderShown} htmlFor={name}>
        {label}
      </Styled.Label>
      {errorMessage && <p>{errorMessage}</p>}
    </Styled.TextField>
  );
};

export default TextArea;
