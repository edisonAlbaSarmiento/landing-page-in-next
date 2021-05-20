import { Content, ContentTitle } from './styles';
import { TitleComponet, Carrusel } from 'components/atoms';
import PropTypes from 'prop-types';
import Bounce from 'react-reveal/Bounce';

function ContentTeam(props) {
  const { textTitle, subTitle, dataCarrusel } = props;
  return (
    <Bounce left>
      <Content>
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
        <Carrusel
          dataCarrusel={dataCarrusel}
          heightCard="480px"
          fontSizeText="20px"
          marginTopButtom
        />
      </Content>
    </Bounce>
  );
}

ContentTeam.defaultProps = {
  textTitle: '',
  subTitle: '',
  dataCarrusel: [],
};

ContentTeam.propTypes = {
  textTitle: PropTypes.string,
  subTitle: PropTypes.string,
  dataCarrusel: PropTypes.array,
};

export default ContentTeam;
