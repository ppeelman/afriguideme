import React, { FunctionComponent } from "react";
import FormInputType from "../../../enums/FormInputType.enum";
import { Styled } from "./TravelSearchInput.styles";
import Icon from "../../icon/Icon.component";
import { IconType, IconSize } from '../../icon/Icon.config';
import colors from "../../../styling/color.styling";

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
        <Icon type={iconType} size={IconSize.SMALL} fillColor={colors.PRIMARY} />
        <p>6 persons</p>
      </Styled.TravelSearchInputItem>
    </Styled.TravelSearchInput>
  );
};

export default TravelSearchInput;
