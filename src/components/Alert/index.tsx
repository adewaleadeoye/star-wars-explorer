import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { alertInfo, setAlert } from './alertSlice';

const Alert = (props: AlertProps) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

 const Toast = () => {
  const classes = useStyles();
  const alert = useAppSelector(alertInfo)
  const dispatch = useAppDispatch()

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(setAlert({open: false, content: undefined, severity: undefined}))
  };

  return (
    <div className={classes.root}>
      <Snackbar open={alert.open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={alert.severity}>
          {alert.content}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Toast
