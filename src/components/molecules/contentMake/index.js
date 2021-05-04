import { Content, ContentTitle } from './styles';
import { TitleComponet, Carrusel } from 'components/atoms';
import Bounce from 'react-reveal/Bounce';
import PropTypes from 'prop-types';

function ContentMake(props) {
  const { textTitle, subTitle, dataCarrusel } = props;
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
        <Carrusel dataCarrusel={dataCarrusel} />
      </Bounce>
    </Content>
  );
}

ContentMake.defaultProps = {
  textTitle: '',
  subTitle: '',
  dataCarrusel: [],
};

ContentMake.propTypes = {
  textTitle: PropTypes.string,
  subTitle: PropTypes.string,
  dataCarrusel: PropTypes.array,
};

export default ContentMake;
