import { ContentOrganism } from './styles';
import { ContentMake } from '../../molecules';
import PropTypes from 'prop-types';

function Make(props) {
  const { textTitle, subTitle } = props;

  return (
    <ContentOrganism>
      <ContentMake textTitle={textTitle} subTitle={subTitle} />
    </ContentOrganism>
  );
}

Make.propTypes = {
  textTitle: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

export default Make;
