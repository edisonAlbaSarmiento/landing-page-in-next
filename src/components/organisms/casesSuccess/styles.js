import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.color.blueBackground};
  padding-left: ${(props) => props.theme.padding.paddingSmall};
  padding-top: ${(props) => props.theme.padding.paddingSmall};
  padding-bottom: ${(props) => props.theme.padding.paddingSmall};
`;
