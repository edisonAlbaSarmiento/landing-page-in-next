import { ContentOrganism } from './styles';
import { ContentContact } from '../../molecules';
import PropTypes from 'prop-types';

function About(props) {
  const { textTitle, subTitle } = props;

  return (
    <ContentOrganism>
      <ContentContact textTitle={textTitle} subTitle={subTitle} />
    </ContentOrganism>
  );
}

About.propTypes = {
  textTitle: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

export default About;
