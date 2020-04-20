import styled from "styled-components";

const SplitScreen = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: stretch;
`
;

const ContentLeft = styled.div`
  padding: 3rem;
  flex-basis: 66%;
  position: relative;
  overflow-y: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ContentRight = styled.div`
  flex-basis: 33%;
  position: relative;
`;

export const Styled = {
  SplitScreen,
  ContentLeft,
  ContentRight
};
