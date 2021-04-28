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
    backgroundColorButton,
    borderColor,
    isSelect,
    borderRadius,
    title,
  } = props;
  return (
    <Button
      disabled={disabled}
      onClick={onClick}
      widthButton={widthButton}
      heightButtom={heightButtom}
      fontSize={fontSize}
      backgroundColorButton={backgroundColorButton}
      color={color}
      borderColor={borderColor}
      isSelect={isSelect}
      borderRadius={borderRadius}
      title={title ? 0 : 1}
    >
      {props.children}
    </Button>
  );
};

ButtonContact.defaultProps = {
  disabled: false,
  color: 'white',
  fontSize: '16px',
  textButtom: 'Test title',
  backgroundColorButton: 'transparent',
  borderColor: 'white',
  isSelect: false,
  borderRadius: '5px',
  title: false,
};

ButtonContact.propTypes = {
  title: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  widthButton: PropTypes.string,
  heightButtom: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  backgroundColorButton: PropTypes.string,
  borderColor: PropTypes.string,
  isSelect: PropTypes.bool,
  borderRadius: PropTypes.string,
};

export default ButtonContact;
