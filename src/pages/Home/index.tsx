import React, { useEffect } from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';
import { setHeaderTitle } from '../../components/Layout/Header/headerSlice';
import { Button } from '@material-ui/core';
import { Movie, People, Public } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
    display: 'flex',
    flexDirection: 'column',
  },
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const Home: React.FC = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setHeaderTitle({ headerTitle: 'Star Wars Explorer' }));
  }, [dispatch]);

  return (
    <Box m={2} className={classes.root}>
      <Button
        className={classes.margin}
        component={RouterLink}
        to="/people"
        variant="contained"
        color="primary"
        startIcon={<People />}
        size="large"
      >
        PEOPLE
      </Button>
      <Button
        className={classes.margin}
        component={RouterLink}
        to="/movies"
        variant="contained"
        color="primary"
        startIcon={<Movie />}
        size="large"
      >
        MOVIES
      </Button>
      <Button
        className={classes.margin}
        component={RouterLink}
        to="/planets"
        variant="contained"
        color="primary"
        startIcon={<Public />}
        size="large"
      >
        PLANETS
      </Button>
    </Box>
  );
};

export default Home;
