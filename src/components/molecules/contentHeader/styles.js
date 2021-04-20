import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const ContentTitle = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.color.blueBackground};
  padding: 3.3%;
`;

export const ContentImageBackBackground = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  position: relative;
  /* @media (min-width: 800px) {
    width: 100%;
  } */
`;

export const ContentImage = styled.div`
  position: relative;
  left: 12%;
  /* @media (min-width: 800px) {
    left: 20%;
  } */
`;

export const ContentImageBackground = styled.div`
  position: absolute;
  top: 12.1%;
  left: 23%;
  animation-fill-mode: both;
  animation-duration: 1000ms;
  animation-delay: 0ms;
  animation-iteration-count: 1;
  opacity: 1;
  /* @media (min-width: 800px) {
    top: 21.4%;
  } */
`;

export const Title = styled.p`
  color: rgb(0, 255, 176);
  font-size: 58px;
  font-weight: bold;
`;

export const SubTitle = styled.p`
  color: rgb(255, 255, 255);
  font-size: 25px;
  font-weight: normal;
`;

export const ContentButton = styled.div`
  width: 100%;
  padding-bottom: 5%;
`;
