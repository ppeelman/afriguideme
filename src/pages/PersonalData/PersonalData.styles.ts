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

const Form = styled.form`
  flex: 1;
  width: 60%;
`;

const NameFields = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  & > *:not(:last-child) {
    margin-right: 2rem;
  }

  & > * {
    width: 50%;
  }
`;

export const Styled = {
  Select,
  Content,
  Form,
  NameFields,
  TitleBlock
};
