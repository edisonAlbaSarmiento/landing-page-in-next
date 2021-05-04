import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

const HomeTemplate = (props) => {
  return (
    <>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        {props.header}
      </Grid>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        {props.about}
      </Grid>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        {props.informationPage}
      </Grid>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        {props.team}
      </Grid>
      {/* <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        {props.contact}
      </Grid>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        {props.footer}
      </Grid> */}
    </>
  );
};

HomeTemplate.defaultProps = {};

HomeTemplate.propTypes = {
  header: PropTypes.element.isRequired,
  about: PropTypes.element.isRequired,
  informationPage: PropTypes.element.isRequired,
  team: PropTypes.element.isRequired,
};

export default HomeTemplate;
