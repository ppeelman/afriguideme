import React, { FunctionComponent } from "react";
import { withRouter } from "react-router";

import Stepper from "../../../stepper/Stepper.component";
import Title from "../../title/Title.component";
import { Styled } from "./TopGradient.styles";
import HeadingType from "../../../enums/HeadingType.enum";
import BackButton from "../../button/backButton/BackButton.component";

type TopGradientProps = {
  match: any;
  location: any;
  history: any;
  title: string;
  subTitle?: string;
  text?: string;
  children: any;
};

const TopGradient: FunctionComponent<TopGradientProps> = (props: TopGradientProps) => {
  const { subTitle, title, text, children } = props;

  return (
    <Styled.Layout>
      <Styled.Background />
      <Styled.Page>
        <Styled.Head>
          <BackButton />
          <Stepper />
        </Styled.Head>
        <Styled.Body>
          {subTitle && <Title headingType={HeadingType.H2}>{subTitle}</Title>}
          <Title headingType={HeadingType.H1}>{title}</Title>
          {text && <Styled.Text>{text}</Styled.Text>}
          <Styled.Content>{children}</Styled.Content>
        </Styled.Body>
      </Styled.Page>
    </Styled.Layout>
  );
};

export default withRouter(TopGradient);
