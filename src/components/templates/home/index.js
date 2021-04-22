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
        {props.informationPage}
      </Grid>
    </>
    // <div className={style.root}>
    //   <Paper className={style.paper}>
    //     <Grid container className={style.container} spacing={2}>
    //       <Grid item xs={2} className={style.sideNav}>
    //         {props.header}
    //       </Grid>
    //       {/* <Grid item container xs alignContent="flex-start" spacing={2}>
    //         <Grid item xs={8} className={style.banner}>
    //           {props.banner}
    //         </Grid>
    //         <Grid item xs={8} className={style.content}>
    //           {props.content}
    //         </Grid>
    //       </Grid>
    //       <Grid item xs={3} className={style.rightPanel}>
    //         {props.rightPanel}
    //       </Grid> */}
    //     </Grid>
    //   </Paper>
    // </div>
  );
};

HomeTemplate.defaultProps = {};

HomeTemplate.propTypes = {
  sideNav: PropTypes.element.isRequired,
  rightPanel: PropTypes.element.isRequired,
  banner: PropTypes.element.isRequired,
  content: PropTypes.element.isRequired,
};

export default HomeTemplate;
