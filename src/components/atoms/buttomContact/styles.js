import styled from 'styled-components';

export const Button = styled.button`
  width: ${(props) => props.widthButton};
  height: ${(props) => props.heightButtom};
  border: 3px solid rgb(123, 245, 177);
  border-radius: 5px;
  font-size: 16px;
  color: ${(props) => (props.color ? props.color : rgb(255, 255, 255))};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  font-weight: bold;
  outline: initial;
  cursor: pointer;
  &:hover {
    background-color: rgb(123, 245, 177);
    color: ${(props) => props.theme.color.blueBackground};
  }
  @media (max-width: 768px) {
    width: 60%;
    height: 10%;
  }
`;
