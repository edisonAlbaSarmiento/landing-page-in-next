import { ContentOrganism } from './styles';
import { ContentTeam } from '../../molecules';
import PropTypes from 'prop-types';

function Team(props) {
  const { textTitle, subTitle, dataCarrusel } = props;

  return (
    <ContentOrganism>
      <ContentTeam
        textTitle={textTitle}
        subTitle={subTitle}
        dataCarrusel={dataCarrusel}
      />
    </ContentOrganism>
  );
}

Team.propTypes = {
  textTitle: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  dataCarrusel: PropTypes.array.isRequired,
};

export default Team;
