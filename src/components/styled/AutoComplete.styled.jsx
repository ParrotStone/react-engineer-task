import styled from "styled-components";

export const StyledAutoComplete = styled.div`
  position: absolute;
  top: 100px;
  left: 34px;
  min-width: 45vw;
  height: fit-content;
  border: 1px solid #979797;
  padding: 1rem 1.1rem;
  margin: .5rem;
  display: inline-block;
`;

export const StyledAutoCompleteItem = styled.div`
  margin: .5rem 0 1rem 0;

  & > div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & > div:first-child p {
    color: #777777;
    text-transform: capitalize;
  }
`;