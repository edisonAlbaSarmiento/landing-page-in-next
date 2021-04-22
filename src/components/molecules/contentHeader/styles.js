import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const ContentTitle = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.color.blueBackground};
  padding: ${(props) => props.theme.padding.paddingSmall};
`;

export const ContentImageBackBackground = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  position: relative;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ContentImage = styled.div`
  position: relative;
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
`;

export const ContentButton = styled.div`
  width: 100%;
  padding-bottom: 5%;
`;

export const ContainerIcon = styled.div`
  width: 100%;
  height: 5%;
`;
