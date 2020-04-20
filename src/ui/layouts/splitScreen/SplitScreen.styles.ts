import styled from "styled-components";
import colors, { hexToRgba } from "../../../styling/color.styling";
import images from "../../../utils/images";

type SplitScreenProps = {
  backgroundImage: string;
}

const SplitScreen = styled.div`
  ${({ backgroundImage }: SplitScreenProps) => `
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(
      105deg,
      ${hexToRgba(colors.PRIMARY, 0.9)} 0%,
      ${hexToRgba(colors.PRIMARY, 0.9)} 45%,
      transparent 45%
    ),
    url(${backgroundImage});

  background-size: cover;
  background-position: center;
  display: flex;
  align-items: stretch;
`}`;

const ContentLeft = styled.div`
  padding: 3rem;
  flex-basis: 45%;
  position: relative;
  overflow-y: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ContentRight = styled.div`
  flex-basis: 55%;
  position: relative;
`;

export const Styled = {
  SplitScreen,
  ContentLeft,
  ContentRight
};
