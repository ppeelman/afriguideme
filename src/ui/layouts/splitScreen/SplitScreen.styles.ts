import styled from "styled-components";
import colors, { hexToRgba } from "../../../styling/color.styling";
import { ENTERED, ENTERING, TransitionStatus } from "react-transition-group/Transition";

type SplitScreenProps = {
  backgroundImage: string;
  state: TransitionStatus;
};

const SplitScreen = styled("div")<SplitScreenProps>`
  position: relative;
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: stretch;
  z-index: 1;

  background-image: linear-gradient(
      to bottom,
      ${hexToRgba(colors.BLACK, 0.25)} 0%,
      ${hexToRgba(colors.BLACK, 0.2)} 10%,
      transparent 50%
    ),
    url(${({ backgroundImage }: SplitScreenProps) => backgroundImage});

  &:before {
    transition: all 0.25s linear;
    content: "";
    position: absolute;
    top: 0;
    height: 100vh;
    width: 55vw;
    background-image: linear-gradient(
      to right,
      ${hexToRgba(colors.PRIMARY, 0.92)} 0%,
      ${hexToRgba(colors.PRIMARY, 0.87)} 100%
    );
    transform: skew(-15deg) translateX( -15%);
  }
`;

type ContentLeftProps = {
  state: TransitionStatus;
};

const ContentLeft = styled("div")<ContentLeftProps>`
  transition: all 0.25s linear;
  padding: 3rem;
  flex-basis: 45%;
  position: relative;
  overflow-y: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  transform:  translateY(${({ state }: ContentLeftProps) => (state === ENTERING || state === ENTERED ? "5px" : 0)});
  opacity: ${({ state }: ContentLeftProps) => (state === ENTERING || state === ENTERED ? 1 : 0.5)};
`;

const ContentRight = styled.div`
  flex-basis: 55%;
  position: relative;
`;

const StepperContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 3rem;
`;

export const Styled = {
  SplitScreen,
  ContentLeft,
  ContentRight,
  StepperContainer
};
