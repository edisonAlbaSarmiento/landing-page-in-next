import styled from 'styled-components';
import { bounceInLeft, bounceInRight } from 'react-animations';
import { animation } from '../../../utils';

export const ContainerMolecule = styled.div`
  width: 100%;
`;

export const ContentMain = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ContentTextImage = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const ContentButtonCases = styled.div`
  padding: 1%;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
`;

export const ContentButton = styled.div`
  padding-bottom: 41%;
  padding-top: 10%;
  @media (max-width: 768px) {
    padding: ${(props) => props.theme.padding.paddingSmall};
  }
`;

export const ContentTextCases = styled.div`
  flex: 5;
  padding-top: 2%;
  padding-left: 3%;
  padding-right: 3%;
`;
export const ContentImageCases = styled.div`
  animation: 2s ${animation(bounceInRight)};
  @media (max-width: 768px) {
    animation: none;
    padding: ${(props) => props.theme.padding.paddingSmall};
  }
`;

export const ContainInfo = styled.div`
  width: 62%;
  animation: 1s ${animation(bounceInLeft)};
  padding-left: 2%;
  @media (max-width: 768px) {
    animation: none;
    width: 100%;
    padding: ${(props) => props.theme.padding.paddingSmall};
  }
`;
