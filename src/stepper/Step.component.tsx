// EXTERNAL
import React, { FunctionComponent, useEffect } from "react";
import { FormattedMessage } from "react-intl";
//
// INTERNAL
import { Styled } from "./Stepper.styles";
import { StepConfig } from "./Stepper.config";
import { useRouteMatch } from "react-router";
import StepDomain from "./Step.domain";

interface Props {
  stepConfig: StepConfig;
  currentStep: number | null;
  setCurrentStep: (stepIdx: number) => void;
}

const Step: FunctionComponent<Props> = ({ stepConfig, currentStep, setCurrentStep }: Props) => {
  const { id, route, translation } = stepConfig as StepConfig;

  const match = useRouteMatch({
    path: route,
    strict: false
  });

  useEffect(() => {
    if (!currentStep && Boolean(match)) {
      setCurrentStep(id);
    }
  }, [currentStep, match, setCurrentStep, id]);

  const step: StepDomain = new StepDomain(translation, id <= (currentStep || 0), Boolean(match));

  return (
    <Styled.Step key={step.name} isCurrent={step.isCurrent} isCompleted={step.isCompleted}>
      <Styled.Step__Circle />
      <Styled.Step__Text isCurrent={step.isCurrent} isCompleted={step.isCompleted}>
        <FormattedMessage id={step.name} />
      </Styled.Step__Text>
    </Styled.Step>
  );
};

export default Step;
