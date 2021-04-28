import { Content, ContentTitle } from './styles';
import { TitleComponet, Carrusel } from 'components/atoms';
import Bounce from 'react-reveal/Bounce';
import PropTypes from 'prop-types';

function ContentMake(props) {
  const { textTitle, subTitle } = props;
  return (
    <Content>
      <Bounce left>
        <ContentTitle>
          <TitleComponet variant="title" marginText="inherit" color="#ffff">
            {textTitle}
          </TitleComponet>
          <TitleComponet
            variant="subtitle"
            color="#ffff"
            fontSize="25px"
            marginText="20px 0px 40.5px"
          >
            {subTitle}
          </TitleComponet>
        </ContentTitle>
        <Carrusel />
      </Bounce>

      {/* <img
        src="https://raw.githubusercontent.com/CristianPaez/ImageEmp/master/ImagesGenerals/Group9.jpeg"
        alt="Background Imagen de Card informacion"
        title="Background Imagen de Card informacion"
      ></img> */}
    </Content>
  );
}

ContentMake.defaultProps = {
  textTitle: '',
  subTitle: '',
};

ContentMake.propTypes = {
  textTitle: PropTypes.string,
  subTitle: PropTypes.string,
};

export default ContentMake;
