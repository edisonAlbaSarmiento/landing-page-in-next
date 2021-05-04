import styled from 'styled-components';

export const ContentOrganism = styled.div`
  width: 100%;
  height: 900px;
  background-color: ${(props) => props.theme.color.blueBackground};
  @media (max-width: 768px) {
    height: 100%;
  }
`;
