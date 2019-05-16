import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    width: 500,
    height: 255,
    margin: '15vw auto 0 auto',
  },
  title: {
    textAlign: 'left',
    paddingLeft: 30,
    color: '#304FFE',
  },
  info: {
    width: 450,
    height: 40,
    textAlign: 'left',
    border: 'none',
    borderBottom: '0.8px solid #304FFE',
  },
  forgot: {
    color: '#E0E0E0',
  },
  button: {
    width: '100%',
    backgroundColor: '#304FFE',
    color: 'white',
    borderRadius: 0,
  },
  leftAlign: {
    padding: theme.spacing.unit * 5,
    margin: theme.spacing.unit * 0,
    borderShadow: 'none',
    color: theme.palette.text.secondary,
    shadows: 0,
  },
});

function Login2(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Grid container spacing={24}>

        <Grid item xs={12}>
            <Typography className={classes.title} variant="h5">Login</Typography>
        </Grid>

        <Grid item xs={12}>
            <form id={'loginForm'}>
                <div>
                    <input type={'text'} placeholder={'EMAIL'} className={classes.info}></input>
                </div>
                <div>
                    <input type={'password'} placeholder={'PASSWORD'} className={classes.info}></input>
                </div>
            </form>
        </Grid>

        <Grid item xs={12}>
            <Typography className={classes.forgot}>Forgot Your PASSWORD?</Typography>
        </Grid>

        <Grid item xs={12}>
            <Button className={classes.button}>SIGN IN</Button>
        </Grid>
        
      </Grid>
    </Paper>
  );
}

Login2.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login2);