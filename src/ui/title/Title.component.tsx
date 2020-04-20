import React, { FunctionComponent, ReactChild } from "react";
import HeadingType from "../../enums/HeadingType.enum";
import { Styled } from "./Title.styles";

type TitleProps = {
  children?: ReactChild | string;
  headingType: HeadingType;
};

const Title: FunctionComponent<TitleProps> = (props: TitleProps) => {
  const { children, headingType } = props;

  const headings = {
    [HeadingType.H1]: <Styled.H1>{children}</Styled.H1>,
    [HeadingType.H2]: <Styled.H2>{children}</Styled.H2>,
    [HeadingType.HERO]: <Styled.HERO>{children}</Styled.HERO>
  };

  return headings[headingType];
};

export default Title;
