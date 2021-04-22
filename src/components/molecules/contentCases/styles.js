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
`;

export const ContentButtonCases = styled.div`
  padding: 1%;
`;

export const ContentButton = styled.div`
  padding-bottom: 41%;
  padding-top: 10%;
`;

export const ContentTextCases = styled.div`
  flex: 5;
  padding-top: 2%;
  padding-left: 3%;
  padding-right: 3%;
`;
export const ContentImageCases = styled.div`
  animation: 2s ${animation(bounceInRight)};
`;

export const ContainInfo = styled.div`
  width: 62%;
  animation: 1s ${animation(bounceInLeft)};
  padding-left: 2%;
`;
