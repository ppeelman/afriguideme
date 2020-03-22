import React, { FunctionComponent } from "react";

import { Styled } from "./Stepper.styles";
import Step from "../../stepper/Step.domain";
import { FormattedMessage } from "react-intl";
import { Store } from "../../store";
import { connect } from "react-redux";
import { buildStepper } from "../../stepper/Stepper.service";

type StepperProps = {
  currentStep: number;
};

const Stepper: FunctionComponent<StepperProps> = (props: StepperProps) => {
  const { currentStep } = props;
  const steps: Step[] = buildStepper(currentStep);

  const stepsComponent = steps.map((step: Step) => (
    <Styled.Step isCurrent={step.isCurrent} isCompleted={step.isCompleted}>
      <Styled.Step__Circle />
      <Styled.Step__Text isCurrent={step.isCurrent} isCompleted={step.isCompleted}>
        <FormattedMessage id={step.name} />
      </Styled.Step__Text>
    </Styled.Step>
  ));

  return (
    <Styled.Stepper>
      {stepsComponent}
      <Styled.Line />
    </Styled.Stepper>
  );
};

const mapStateToProps = (store: Store) => ({
  currentStep: store.currentStep
});

const mapDispatchToProps = (dispatch: any) => ({
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Stepper);
