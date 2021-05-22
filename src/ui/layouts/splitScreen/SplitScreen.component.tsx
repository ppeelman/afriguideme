// EXTERNAL
import React, { FunctionComponent } from "react";
import { Transition } from "react-transition-group";
import { ENTERING, TransitionStatus } from "react-transition-group/Transition";

import { Styled } from "./SplitScreen.styles";
import Stepper from "../../../stepper/Stepper.component";

type SplitScreenProps = {
  backgroundImage: string;
  contentLeft: React.ReactChild;
  contentRight?: React.ReactChild;
};

const SplitScreen: FunctionComponent<SplitScreenProps> = (props: SplitScreenProps) => {
  const { contentLeft, contentRight = <></>, backgroundImage } = props;

  return (
    <Transition in={true} timeout={250} appear={true}>
      {(state: TransitionStatus) => (
        <Styled.SplitScreen state={state} backgroundImage={backgroundImage}>
          <Styled.ContentLeft state={state}>{contentLeft}</Styled.ContentLeft>
          <Styled.ContentRight>
            <Styled.StepperContainer>
              <Stepper />
            </Styled.StepperContainer>
            {contentRight}
          </Styled.ContentRight>
        </Styled.SplitScreen>
      )}
    </Transition>
  );
};

export default SplitScreen;
