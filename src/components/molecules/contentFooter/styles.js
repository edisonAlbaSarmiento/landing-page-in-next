import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  height: 150px;
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
  width: 45%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    width: fit-content;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ContentPrimaryTitles = styled.div`
  width: 100%;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const ContentPrimaryFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    justify-content: center;
    padding: 0px;
  }
`;

export const ContentChild = styled.div`
  padding: 0% 0% 0% 6%;

  @media (max-width: 768px) {
    padding: 2%;
  }
`;

export const ImageCard = styled.img`
  width: 70px;
  height: 70px;
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

export const TextFooter = styled.em`
  color: #d8d8d8;
  font-family: 'Poppins', Sans-serif;
  font-size: 10px;
  font-weight: 400;
`;

export const Redirect = styled.a`
  color: #d8d8d8;
  font-weight: ${(props) => (props.fontWeight ? 900 : 'inherit')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '10px')};
`;
