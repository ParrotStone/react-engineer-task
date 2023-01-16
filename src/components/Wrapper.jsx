import { StyledInputBox } from "./styled/InputBox.styled";

function wrapWithBox(Component) {
  return (props) => {
    return (
      <StyledInputBox>
        <Component {...props} />
      </StyledInputBox>
    );
  };
}

export default wrapWithBox;