import styled from 'styled-components';

export const Button = styled.button`
  width: ${(props) => props.widthButton};
  height: ${(props) => props.heightButtom};
  border: ${(props) => (props.isSelect ? '4px ' : '3px')} solid
    ${(props) => props.borderColor};
  border-radius: ${(props) => props.borderRadius};
  font-size: 16px;
  color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.isSelect ? props.backgroundColorButton : 'transparent'};
  font-weight: bold;
  outline: initial;
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.title === 0 ? '#7bf5b1' : props.backgroundColorButton};
    color: ${(props) => props.isSelect && props.theme.color.blueBackground};
  }
`;
