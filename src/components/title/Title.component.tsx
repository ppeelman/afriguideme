import React, { FunctionComponent } from 'react';
import HeadingType from '../../enums/HeadingType.enum';
import { Styled } from './Title.styles';

type TitleProps = {
  children?: string;
  headingType: HeadingType;
};

const Title: FunctionComponent<TitleProps> = (props: TitleProps) => {
  const { children, headingType } = props;

  switch (headingType) {
    case HeadingType.H1:
      return <Styled.H1>{children}</Styled.H1>;
    case HeadingType.H2:
      return <Styled.H2>{children}</Styled.H2>;
    case HeadingType.HERO:
      return <Styled.HERO>{children}</Styled.HERO>;
  }
};

export default Title;
