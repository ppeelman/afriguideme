import styled from "styled-components";
import colors, { hexToRgba } from "../../styling/color.styling";
import { fontSize } from "../../styling/font.styling";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  background-color: ${colors.PRIMARY};
`;

const SplitScreen = styled.div`
  height: 100vh;
  width: 55vw;
  position: absolute;
  right: 0;
  background-color: ${colors.PRIMARY};
  transform: skew(-15deg);
  transform-origin: center;
`;

const Left = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 55%;
  height: 100%;
  z-index: 0;
`;

const Title = styled.div`
  position: absolute;
  left: 3rem;
  top: 3rem;
`;

const Right = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 45%;
  height: 100vh;
  transform-origin: center;
  padding: 3rem;
  display: flex;
  flex-direction: column;
`;

const ActivitiesContainer = styled.div`
  margin-top: 2rem;
  padding: 0 5rem;
  padding-left: 10rem;
  width: 100%;
  height: 100%;
  position: relative;
  flex: 1;
`;

const Calendar = styled.div`
  margin-top: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
`;

type SingleDayProps = {
  height: number;
};

const SingleDay = styled("div")<SingleDayProps>`
  margin: 1rem 0;
  width: 100%;

  ${({ height }: SingleDayProps) => `height: ${height}px;`}
  color: ${colors.WHITE};
  font-size: ${fontSize.SMALL};
`;

const DayIndexText = styled.p`
  color: ${colors.LIGHTEST_GREY};
  font-size: ${fontSize.XSMALL};
  text-transform: uppercase;
`;

const DateText = styled.p`
  color: ${colors.WHITE};
  font-size: ${fontSize.MEDIUM};
`;

const ContinueButton = styled.div`
   align-self: flex-end;
   padding: 3rem;
`;

export const Styled = {
  Container,
  SplitScreen,
  Left,
  Right,
  Title,
  ActivitiesContainer,
  Calendar,
  SingleDay,
  DayIndexText,
  DateText,
  ContinueButton
};
