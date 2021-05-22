import styled from "styled-components";

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
  margin-bottom: 5rem;
`;

const Details = styled.div`
  flex: 1;
`;

export const Styled = {
  Select,
  Content,
  Details,
  TitleBlock
};
