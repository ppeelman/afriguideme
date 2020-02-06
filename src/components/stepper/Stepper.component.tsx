// EXTERNAL
import React, { FunctionComponent } from 'react';

import { Styled } from './Stepper.styles';

type StepData = {
  stepName: string;
  isCompleted: boolean;
  isCurrent: boolean;
};

type StepperProps = {
  stepperData: StepData[];
};

const Stepper: FunctionComponent<StepperProps> = (props: StepperProps) => {
  const { stepperData } = props;

  const steps = stepperData.map((step: StepData) => (
    <Styled.Step isCurrent={step.isCurrent} isCompleted={step.isCompleted}>
      <Styled.Step__Circle />
      <Styled.Step__Text isCurrent={step.isCurrent} isCompleted={step.isCompleted}>{step.stepName}</Styled.Step__Text>
    </Styled.Step>
  ));

  return (
    <Styled.Stepper>
      {steps}
      <Styled.Line />
    </Styled.Stepper>
  );
};

export default Stepper;
