import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 768px) {
    width: fit-content;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    padding: 2%;
  }
`;

export const ContentPrimary = styled.div`
  display: flex;
  width: 30%;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 768px) {
    width: fit-content;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ContentPrimaryFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const ContentChild = styled.div`
  padding: 0% 0% 3% 6%;

  @media (max-width: 768px) {
    padding: 2%;
  }
`;

export const ImageCard = styled.img`
  width: 100px;
  height: 100px;
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

export const ContentNetworks = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  width: 22%;
  @media (max-width: 768px) {
    width: 48%;
    padding: 5%;
  }
`;
