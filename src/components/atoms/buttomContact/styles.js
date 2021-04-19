import styled from 'styled-components';

export const Button = styled.button`
  width: ${(props) => props.widthButton};
  height: ${(props) => props.heightButtom};
  border: 3px solid rgb(123, 245, 177);
  border-radius: 5px;
  font-size: 16px;
  color: rgb(255, 255, 255);
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  background-color: transparent;
  font-weight: bold;
  outline: initial;
  cursor: pointer;
`;
