import styled from "styled-components";

import colors from "../../styling/color.styling";
import getShadow from "../../styling/shadows.styling";

const BottomBar = styled.div`
  position: absolute;
  bottom: 0rem;
  display: none;
  left: 0;
  right: 0;
  background-color: ${colors.WHITE};
  box-shadow: ${getShadow("MEDIUM")};
  padding: 2rem;
  z-index: 5;
  display: flex;
  justify-content: flex-end;
`;

const Content = styled.div`
  display: flex;
  align-items: center;

  & > *:first-child {
    margin-right: 2rem;
  }
`;

export const Styled = { BottomBar, Content };
