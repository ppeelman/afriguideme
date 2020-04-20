import styled from "styled-components";
import colors, { hexToRgba } from "../../../styling/color.styling";
import { fontSize } from "../../../styling/font.styling";

const Layout = styled.div`
  width: 100%;
  position: relative;
`;

const Background = styled.div`
  background-image: linear-gradient(to top right, ${hexToRgba(colors.PRIMARY, 0.75)}, ${hexToRgba(colors.PRIMARY, 1)});
  width: 100%;
  height: 80vh;
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 10vh;
`;

const Page = styled.div`
  padding: 3rem 0 0 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Head = styled.div`
  padding: 0 3rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 3rem;
`;

const Body = styled.div`
  padding: 2rem 0rem 0rem 5rem;
  flex: 1 1 auto;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  margin-top: 3rem;
  z-index: 2;
  flex: 1 1 auto;
  overflow-y: auto;
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
