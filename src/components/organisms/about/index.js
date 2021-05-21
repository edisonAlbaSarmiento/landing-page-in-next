import { ContentOrganism } from './styles';
import { ContentContact } from '../../molecules';
import PropTypes from 'prop-types';

function About(props) {
  const { textTitle, subTitle, handleSubmit, formikForm } = props;

  return (
    <ContentOrganism>
      <ContentContact
        textTitle={textTitle}
        subTitle={subTitle}
        handleSubmit={handleSubmit}
        formikForm={formikForm}
      />
    </ContentOrganism>
  );
}

About.propTypes = {
  textTitle: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  formikForm: PropTypes.any.isRequired,
};

export default About;
