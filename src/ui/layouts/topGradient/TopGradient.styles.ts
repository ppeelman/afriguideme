import styled from "styled-components";
import colors, { hexToRgba } from "../../../styling/color.styling";
import { fontSize } from "../../../styling/font.styling";

const Layout = styled.div`
  width: 100%;
  position: relative;
`;

const Background = styled.div`
  background-image: linear-gradient(
    to top right,
    ${hexToRgba(colors.PRIMARY, 0.75)},
    ${hexToRgba(colors.PRIMARY, 1)}
  );
  width: 100%;
  height: 100%;
  z-index: -1;
  position: absolute;
  left: 0;
  bottom: 10vh;
`;

const Page = styled.div`
  padding: 3rem;
`;

const Head = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 3rem;
`;

const Body = styled.div`
  padding: 2rem 5rem;
`;

const Content = styled.div`
  margin-top: 3rem;
  z-index: 2;
`;

const Text = styled.div`
  width: 75%;
  font-size: ${fontSize.LARGE};
  color: ${colors.LIGHTEST_GREY};
  margin-bottom: 5rem;
`;

export const Styled = {
  Layout,
  Background,
  Page,
  Head,
  Body,
  Content,
  Text
};
