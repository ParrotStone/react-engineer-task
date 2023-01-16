import { useEffect, useState } from 'react';
import wrapWithBox from './Wrapper';
import { StyledDropdown, StyledDropdownLabel, StyledDropdownContainer } from './styled/Dropdown.styled';
import chevronDown from '../assets/chevron-down.svg';

function Dropdown({ label, children }) {
  const [clicked, setClicked] = useState(false);

  const removeOnClickOutSideDropdown = ({ target }) => {
    if (!target.closest('.dropdown-list')) {
      setClicked(false);
    }
  };

  useEffect(() => {
    document.getRootNode().addEventListener('click', removeOnClickOutSideDropdown);

    return () => document.getRootNode().removeEventListener('click', removeOnClickOutSideDropdown);
  }, []);

  return (
    <StyledDropdown>
      <StyledDropdownLabel className="dropdown-list" clicked={clicked} onClick={() => setClicked(!clicked)}>
        {label} <img src={chevronDown} alt="rating dropdown" />
      </StyledDropdownLabel>
      <StyledDropdownContainer clicked={clicked}>
        {children}
      </StyledDropdownContainer>
    </StyledDropdown>
  );
}

export default wrapWithBox(Dropdown);
