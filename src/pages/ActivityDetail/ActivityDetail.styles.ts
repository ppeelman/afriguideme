import styled from "styled-components";

const Select = styled.div``;

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

const IncludedAndNotContainer = styled.div`
  display: flex;
`;

const Included = styled.div`
  margin-right: 5rem;
`;

const NotIncluded = styled.div`
  margin-right: 1rem;
`;

export const Styled = {
  Select,
  Content,
  Details,
  IncludedAndNotContainer,
  Included,
  NotIncluded,
  TitleBlock
};
