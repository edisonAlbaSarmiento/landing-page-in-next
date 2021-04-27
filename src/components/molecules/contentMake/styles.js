import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  /* display: flex;
  flex-direction: row; */
  background-color: red;
  background-image: url('https://raw.githubusercontent.com/CristianPaez/ImageEmp/master/ImagesGenerals/Group9.jpeg');
  background-position: right;
  background-repeat: no-repeat;
  height: 64%;
`;

export const ContentTitle = styled.div`
  width: 67%;
  /* background-color: ${(props) => props.theme.color.blueBackground}; */
  padding: ${(props) => props.theme.padding.paddingSmall};
`;