import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  /* display: flex;
  flex-direction: row; */
  background-image: url('/images/background/Group9.jpeg');
  background-position: right;
  background-repeat: no-repeat;
  background-size: 70%;
  height: 64%;
  background-color: #23292c;
  @media (max-width: 768px) {
    background-image: none;
  }
`;

export const ContentTitle = styled.div`
  width: 67%;
  /* background-color: ${(props) => props.theme.color.blueBackground}; */
  padding: ${(props) => props.theme.padding.paddingSmall};
`;
