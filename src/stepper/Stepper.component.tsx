// EXTERNAL
import React, { FunctionComponent, useState } from "react";
//
// INTERNAL
import StepComponent from "./Step.component";
import { Styled } from "./Stepper.styles";
import { StepConfig, stepperConfig } from "./Stepper.config";

const Stepper: FunctionComponent = () => {
  const [currStepIdx, setCurrStepIdx] = useState<number | null>(null);

  return (
    <Styled.Stepper>
      {stepperConfig.map((stepConfig: StepConfig) => (
        <StepComponent stepConfig={stepConfig} currentStep={currStepIdx} setCurrentStep={setCurrStepIdx} />
      ))}
      <Styled.Line />
    </Styled.Stepper>
  );
};

export default Stepper;
