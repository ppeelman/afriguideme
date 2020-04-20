import React, { ChangeEvent, FunctionComponent, useState } from "react";

import { Styled } from "./TextField.styles";

interface TextFieldProps {
  id: string;
  name: string;
  label: string;
  minLength: number;
  maxLength: number;
  required?: boolean;
  defaultValue?: any;
  autofocus?: boolean;
  isEmail?: boolean;
}

const TextField: FunctionComponent<TextFieldProps> = (props: TextFieldProps) => {
  const { id, name, label, minLength, maxLength, required, autofocus, defaultValue } = props;

  const [value, updateValue] = useState<any>(defaultValue);
  const [errorMessage, setErrorMessage] = useState<any>(null);
  const [placeholderShown, togglePlaceholderShown] = useState(!Boolean(defaultValue));

  const handleChange = (event: ChangeEvent) => {
    const target = event?.target as HTMLInputElement;
    const value = target?.value;

    updateValue(value);
    togglePlaceholderShown(!Boolean(value));
  };

  return (
    <Styled.TextField>
      <Styled.Input
        type="text"
        id={id}
        name={name}
        value={value}
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
      {errorMessage && <Styled.Error>{errorMessage}</Styled.Error>}
    </Styled.TextField>
  );
};

export default TextField;
