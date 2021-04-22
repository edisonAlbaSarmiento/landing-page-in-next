import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

const ButtonComponent = (props) => (
  <Button
    variant="contained"
    color="primary"
    disabled={props.disabled}
    onClick={props.onClick}
    size="medium"
  >
    {props.title}
  </Button>
);

ButtonComponent.defaultProps = {
  disabled: false,
};

ButtonComponent.propTypes = {
  title: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default ButtonComponent;
