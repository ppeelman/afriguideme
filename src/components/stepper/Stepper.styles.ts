import styled from 'styled-components';
import colors from '../../styling/colors.styling';
import getShadow from '../../styling/shadows.styling';
import {fontSize} from '../../styling/font.styling';

type StepProps = {
  isCompleted: boolean;
  isCurrent: boolean;
};

// Local constants
const CIRCLE_DIAMETER = 4; // in rem
const CIRCLE_GAP = 6; // in rem
const COLOR_INACTIVE = colors.PRIMARY_LIGHT;
const COLOR_ACTIVE = colors.WHITE;

const Stepper = styled.div`
  position: relative;
  display: flex;
`;

const Line = styled.span`
  position: absolute;
  display: block;

  /* Move the line down by the distance of a step circle radius so it intersects the centers of each circle */
  transform: translateY(${CIRCLE_DIAMETER / 2}rem) translateX(-50%);
  width: 85%;
  left: 50%;
  border-bottom: 1px solid ${COLOR_INACTIVE};
`;

const Step = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${COLOR_INACTIVE};

  :not(:last-of-type) {
    margin-right: ${CIRCLE_GAP}rem;
  }

  ${({ isCompleted, isCurrent }: StepProps) =>
    `color: ${isCompleted || isCurrent ? COLOR_ACTIVE : COLOR_INACTIVE}`};
`;

const Step__Circle = styled.div`
  opacity: inherit;
  border-radius: 50%;
  height: ${CIRCLE_DIAMETER}rem;
  width: ${CIRCLE_DIAMETER}rem;
  margin-bottom: 0.5rem;
  box-shadow: ${getShadow('SMALL')};
  color: inherit;
  background-color: currentColor;
  z-index: 10;
`;

const Step__Text = styled.span`
  ${({ isCompleted, isCurrent }: StepProps) =>
    `color: ${isCompleted || isCurrent ? COLOR_ACTIVE : COLOR_INACTIVE}`};
  font-weight: 300;
  color: inherit;
  font-size: ${fontSize.SMALL}
`;

export const Styled = {
  Stepper,
  Line,
  Step,
  Step__Circle,
  Step__Text
};
