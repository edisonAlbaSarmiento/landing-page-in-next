import { ContentOrganism } from './styles';
import { ContentTeam } from '../../molecules';
import PropTypes from 'prop-types';

function Team(props) {
  const { textTitle, subTitle } = props;

  return (
    <ContentOrganism>
      <ContentTeam textTitle={textTitle} subTitle={subTitle} />
    </ContentOrganism>
  );
}

Team.propTypes = {
  textTitle: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

export default Team;
