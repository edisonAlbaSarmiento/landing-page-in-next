import PropTypes from 'prop-types';
import { Button } from './styles';

const ButtonContact = (props) => {
  const { widthButton, heightButtom, disabled, onClick } = props;
  return (
    <Button
      disabled={disabled}
      onClick={onClick}
      widthButton={widthButton}
      heightButtom={heightButtom}
    >
      {props.children}
    </Button>
  );
};

ButtonContact.propTypes = {
  title: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  widthButton: PropTypes.string,
  heightButtom: PropTypes.string,
  border: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.string,
};

ButtonContact.defaultProps = {
  disabled: false,
  border: null,
  color: 'white',
  fontSize: '16px',
  paddingButton: 0,
};

export default ButtonContact;
