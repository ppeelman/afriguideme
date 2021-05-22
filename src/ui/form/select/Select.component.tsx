import React, { ChangeEvent, FunctionComponent } from "react";

import { Styled } from "./Select.styles";

export type Option = {
  label: string;
  value: string | number;
};

interface Props {
  id: string;
  name: string;
  label?: string;
  options: Option[];
  onChange?: (event: ChangeEvent) => void;
  disabled?: boolean;
  autofocus?: boolean;
}

const Select: FunctionComponent<Props> = (props: Props) => {
  const { id, name, label, options, onChange = () => {}, autofocus, disabled } = props;

  return (
    <Styled.Container>
      {label && <Styled.Label htmlFor={id}>{label}</Styled.Label>}
      <Styled.Select id={id} name={name} autoFocus={autofocus} disabled={disabled} onChange={onChange}>
        {options.map(({ label, value }: Option) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </Styled.Select>
    </Styled.Container>
  );
};

export default Select;
