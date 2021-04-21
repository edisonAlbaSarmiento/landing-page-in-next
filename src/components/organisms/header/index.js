import { ContentOrganism } from './styles';
import { ContentHeader } from '../../molecules';
import PropTypes from 'prop-types';

function Header(props) {
  const { textTitle, subTitle, textButtom, onClick } = props;

  return (
    <ContentOrganism>
      <ContentHeader
        textTitle={textTitle}
        subTitle={subTitle}
        textButtom={textButtom}
        onClick={onClick}
      />
    </ContentOrganism>
  );
}

ContentHeader.propTypes = {
  textTitle: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  textButtom: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Header;
