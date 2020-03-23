import React, { FunctionComponent } from "react";
import FormInputType from "../../../enums/FormInputType.enum";
import { Styled } from "./TravelSearchInput.styles";
import Icon from "../../icon/Icon.component";
import IconType from "../../../enums/IconType.enum";
import { IconSize } from "../../../styling/icon.styling";

type TravelSearchInputProps = {
  formInputType: FormInputType,
  iconType: IconType,
  label: string
};

const TravelSearchInput: FunctionComponent<TravelSearchInputProps> = (
  props: TravelSearchInputProps
) => {
  const { iconType, label } = props;

  return (
    <Styled.TravelSearchInput>
      <Styled.TravelSearchInputLabel>{label}</Styled.TravelSearchInputLabel>
      <Styled.TravelSearchInputItem>
        <Icon type={iconType} size={IconSize.SMALL} />
        <p>6 persons</p>
      </Styled.TravelSearchInputItem>
    </Styled.TravelSearchInput>
  );
};

export default TravelSearchInput;
