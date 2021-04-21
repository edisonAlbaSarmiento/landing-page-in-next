import PropTypes from 'prop-types';
import { Button } from './styles';

const ButtonContact = (props) => {
  const {
    widthButton,
    heightButtom,
    disabled,
    onClick,
    fontSize,
    color,
  } = props;
  return (
    <Button
      disabled={disabled}
      onClick={onClick}
      widthButton={widthButton}
      heightButtom={heightButtom}
      fontSize={fontSize}
      color={color}
    >
      {props.children}
    </Button>
  );
};

ButtonContact.propTypes = {
  title: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  widthButton: PropTypes.string,
  heightButtom: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.string,
};

ButtonContact.defaultProps = {
  disabled: false,
  color: 'white',
  fontSize: '16px',
  textButtom: 'Test title',
};

export default ButtonContact;
