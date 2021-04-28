import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  background-color: yellow;

  height: 64%;
`;

export const ContentTitle = styled.div`
  width: 88%;
  /* background-color: ${(props) => props.theme.color.blueBackground}; */
  padding: ${(props) => props.theme.padding.paddingSmall};
`;
