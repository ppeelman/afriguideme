import React, { FunctionComponent, ReactChild } from "react";
import HeadingType from "../../enums/HeadingType.enum";
import { Styled } from "./Title.styles";

type TitleProps = {
  children?: ReactChild | string;
  headingType: HeadingType;
  color?: string;
};

const Title: FunctionComponent<TitleProps> = (props: TitleProps) => {
  const { children, headingType, color } = props;

  const headings = {
    [HeadingType.H1]: <Styled.H1 style={{color: color}}>{children}</Styled.H1>,
    [HeadingType.H2]: <Styled.H2 style={{color: color}}>{children}</Styled.H2>,
    [HeadingType.HERO]: <Styled.HERO style={{color: color}}>{children}</Styled.HERO>
  };

  return headings[headingType];
};

export default Title;
