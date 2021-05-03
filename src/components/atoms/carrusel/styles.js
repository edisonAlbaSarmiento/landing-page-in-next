import styled from 'styled-components';

export const ContentCarrusel = styled.div`
  width: 100%;
  height: 360px;
  display: flex;
  justify-content: space-around;
  background-color: red;
  margin-bottom: 14%;
`;

export const ContentCard = styled.div`
  width: 65%;
  height: 380px;
  background-color: white;
  border-radius: 3%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const ContentArrows = styled.div`
  display: flex;
  margin: 24% 0px 0px 2%;
  width: 10%;
  justify-content: space-around;
  position: absolute;
  /* position: absolute; */
  @media (max-width: 768px) {
    display: none;
    bottom: 20%;
  }
`;

export const ContentArrowSecundary = styled.div`
  background-color: ${(props) => (props.currentSlide ? '#BDBEC0' : 'white')};
  width: 54px;
  height: 54px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentTitle = styled.div`
  width: 92%;
  /* background-color: ${(props) => props.theme.color.blueBackground}; */
  padding: 8.3% 0 0 4.3%;
  @media (max-width: 768px) {
    padding: 4.3% 0 0 4.3%;
  }
`;

export const ContentFooterCard = styled.div`
  width: 100%;
  height: 18%;
  background-color: #f1f2f3;
  padding-left: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const ContainerIcon = styled.div``;
