import styled from "styled-components";
import { Tab, TabPanels, TabPanel } from "@reach/tabs";
import colors from "../../styling/color.styling";
import { fontSize } from "../../styling/font.styling";

const Select = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  & > * {
    margin-right: 2rem;
  }
`;

const Content = styled.div`
  padding-top: 5rem;
  padding-left: 5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
`;

const TitleBlock = styled.div`
  margin-bottom: 6rem;
`;

// Emotion and styled components
const MyTab = styled(Tab)`
  padding: 1rem 0;
  margin-right: 2rem;
  border: none;
  border-bottom: none;
  background: transparent;
  color: ${colors.LIGHTEST_GREY};
  font-size: ${fontSize.MEDIUM};

  &[data-selected] {
    color: ${colors.WHITE};
    border-bottom: 2px solid ${colors.WHITE};
  }
`;

const MyTabPanels = styled(TabPanels)`
  border-top: 1px solid ${colors.LIGHTEST_GREY};
  width: 100%;
  height: 70%;
`;

const MyTabPanel = styled(TabPanel)`
  padding-top: 2rem;
  width: 100%;
  height: 100%;
  overflow: auto;
  padding-right: 1rem;
`;

const Body = styled.div`
  flex: 1;
  width: 80%;
`;

const OverviewContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const FormContainer = styled.div`
  width: 100%;
`;

const IncludedAndNotContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Included = styled.div``;

const NotIncluded = styled.div``;

export const Styled = {
  Select,
  Content,
  MyTab,
  MyTabPanels,
  MyTabPanel,
  Body,
  OverviewContainer,
  FormContainer,
  IncludedAndNotContainer,
  Included,
  NotIncluded,
  TitleBlock
};
