import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useAppSelector } from '../../../app/hooks';
import { getBackButtonValue, getHeaderTitle} from './headerSlice';
import { useHistory, useLocation } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      textAlign:'center'
    },
  }),
);

const Header = () => {
  const classes = useStyles();
  const history = useHistory()
  const headerTitle = useAppSelector(getHeaderTitle)
  const backButtonvalue = useAppSelector(getBackButtonValue)
  const location = useLocation()

  const goHome = () => {
    history.push('/')
  }

  const goBack = () => {
    history.push(`${backButtonvalue}`)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={goHome}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {headerTitle}
          </Typography>
          {location.pathname !== "/" && <Button color="inherit" onClick={goBack}><ArrowBack /></Button>}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header
