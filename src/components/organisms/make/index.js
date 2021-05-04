import { ContentOrganism } from './styles';
import { ContentMake } from '../../molecules';
import PropTypes from 'prop-types';

function Make(props) {
  const { textTitle, subTitle, dataCarrusel } = props;

  return (
    <ContentOrganism>
      <ContentMake
        textTitle={textTitle}
        subTitle={subTitle}
        dataCarrusel={dataCarrusel}
      />
    </ContentOrganism>
  );
}

Make.propTypes = {
  textTitle: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  dataCarrusel: PropTypes.array.isRequired,
};

export default Make;
