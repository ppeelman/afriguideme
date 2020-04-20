import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 100%;
`;

const HeaderAndCards = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-left: calc(15vw + 5rem);
  margin-right: 4rem;
`;

const Cards = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;

  & > * {
    margin-right: 5rem;
    margin-bottom: 5rem;
  }
`;

export const Styled = { Container, HeaderAndCards, Cards };
