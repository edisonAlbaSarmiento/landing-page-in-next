import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import { ContentField } from './styles';
import { withStyles } from '@material-ui/core/styles';

const CssTextField = withStyles({
  root: {
    '.MuiTextField-root': {
      borderColor: 'green',
    },
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'red',
      },
      '&:hover fieldset': {
        borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
    },
    label: {
      color: 'white',
    },
  },
})(TextField);

const TextFieldComponent = (props) => (
  <ContentField paddingField={props.paddingField}>
    <CssTextField
      fullWidth
      name={props.name}
      label={props.label}
      defaultValue={props.value}
      required={props.required}
      onChange={props.onChange}
      error={props.error}
      helperText={props.errorMessage}
      InputLabelProps={{
        shrink: true,
        style: { color: 'white' },
      }}
      inputProps={{
        style: { color: 'white' },
      }}
    />
  </ContentField>
);

TextFieldComponent.defaultProps = {
  value: '',
  required: false,
  error: false,
  errorMessage: '',
  paddingField: '1%',
};

TextFieldComponent.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  paddingField: PropTypes.string,
};

export default TextFieldComponent;
