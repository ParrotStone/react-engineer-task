import styled from "styled-components";

export const StyledDropdown = styled.div`
  position: relative;
`;

export const StyledDropdownLabel = styled.div`
  width: 113px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  & > img {
    rotate: ${({ clicked }) => clicked ? '180deg' : ''};
    transition: rotate .3s ease;
  }
`;

export const StyledDropdownContainer = styled.div`
  position: absolute;
  top: 40px;
  left: -17px;
  border: 1px solid gray;
  min-width: max-content;
  padding: .5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  row-gap: 10px;
  opacity: ${({ clicked }) => clicked ? 1 : 0};
  translate: ${({ clicked }) => clicked ?
    '0 10px' : '0 0'};
  pointer-events: ${({ clicked }) => clicked ? 'unset' : 'none'};
  transition: opacity .3s ease, translate .3s ease;
`;