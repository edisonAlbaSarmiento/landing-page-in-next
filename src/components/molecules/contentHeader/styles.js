import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  background-color: yellow;
  display: flex;
  flex-direction: row;
`;

export const ContentTitle = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.color.blueBackground};
`;

export const ContentImage = styled.div`
  width: 100%;
  background-color: blue;
`;

export const ContentImageBackBackground = styled.div`
  background-color: orange;
  position: relative;
  width: 100%;
  height: 100%;
`;

export const ContentImageBackground = styled.div`
  background-color: blue;
  position: absolute;
  bottom: 0.4px;
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
