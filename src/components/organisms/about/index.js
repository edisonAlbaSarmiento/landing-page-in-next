import { ContentOrganism } from './styles';
import { ContentContact } from '../../molecules';
import PropTypes from 'prop-types';

function About(props) {
  const { textTitle, subTitle, handleSubmit } = props;

  return (
    <ContentOrganism>
      <ContentContact
        textTitle={textTitle}
        subTitle={subTitle}
        handleSubmit={handleSubmit}
      />
    </ContentOrganism>
  );
}

About.propTypes = {
  textTitle: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default About;
