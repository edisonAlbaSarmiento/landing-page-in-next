import {
  ButtonComponent,
  TextFieldComponent,
  Typography,
} from 'components/atoms';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';

const useStyle = makeStyles((theme) => ({
  root: {
    backgroundColor: '#fedecc',
    borderRadius: 10,
    padding: 10,
  },
}));
function FormItem(props) {
  const { title } = props;
  console.log('title molecula', title);
  if (!title) return null;
  const { eventData } = props;
  const style = useStyle();

  return (
    <div>
      <TextFieldComponent label="Test" value="hola" required />
      <ButtonComponent title={title} />
      <Box component={Container} boxShadow={2} className={style.root}>
        <Typography variant="header">test</Typography>
        <Typography variant="title">test title</Typography>
        <Typography variant="subtitle">test sub</Typography>
      </Box>
    </div>
  );
}

FormItem.propTypes = {
  eventData: PropTypes.shape({
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }),
};

FormItem.defaultProps = {};

export default FormItem;
