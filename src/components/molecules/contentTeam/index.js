import { Content, ContentTitle } from './styles';
import { TitleComponet, Carrusel } from 'components/atoms';
import PropTypes from 'prop-types';

function ContentTeam(props) {
  const { textTitle, subTitle, dataCarrusel } = props;
  return (
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
