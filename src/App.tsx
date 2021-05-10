import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Toast from './components/Alert';
import Header from './components/Layout/Header';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import LoadingSpinner from './components/Indicator/LoadingSpinner';
import ErrorBoundary from './components/ErrorBoundary';

const Home = lazy(() => import('./pages/Home'));
const People = lazy(() => import('./pages/People'));
const PersonDetail = lazy(() => import('./pages/People/PersonDetail'));
const Movies = lazy(() => import('./pages/Movies'));
const MovieDetail = lazy(() => import('./pages/Movies/MovieDetail'));
const Planets = lazy(() => import('./pages/Planets'));
const PlanetDetail = lazy(() => import('./pages/Planets/PlanetDetail'));

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    contentWrapper: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '1em',
    },
  })
);

const App = () => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <Container className={classes.contentWrapper}>
        <ErrorBoundary>
          <Suspense fallback={<LoadingSpinner />}>
            <Switch>
              <Route path="/people/:id" component={PersonDetail} />
              <Route path="/people" component={People} />
              <Route path="/movies/:id" component={MovieDetail} />
              <Route path="/movies" component={Movies} />
              <Route path="/planets/:id" component={PlanetDetail} />
              <Route path="/planets" component={Planets} />
              <Route path="/" component={Home} />
            </Switch>
          </Suspense>
        </ErrorBoundary>
      </Container>
      <Toast />
    </>
  );
};

export default App;
