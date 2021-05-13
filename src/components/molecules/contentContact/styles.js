import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  background-image: url('https://raw.githubusercontent.com/CristianPaez/ImageEmp/master/ImagesGenerals/Group10.jpeg');
  background-position: right;
  background-repeat: no-repeat;
  background-size: 70%;
  height: 64%;
  background-color: #23292c;
  @media (max-width: 768px) {
    background-image: none;
  }
`;

export const ContentTitle = styled.div`
  width: 88%;
  background-color: ${(props) => props.theme.color.trasnparentBackground};
  padding: ${(props) => props.theme.padding.paddingSmall};
`;
