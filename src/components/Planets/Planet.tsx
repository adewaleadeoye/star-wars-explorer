import React, { useEffect } from 'react';
import { Theme, createStyles, makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useLocation } from 'react-router-dom';
import constants from '../../utils/constants';
import LoadingSpinner from '../Indicator/LoadingSpinner';
import { displayPlanet, getPlanetData, loadingStatus } from './planetsSlice';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 151,
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
  }),
);

const Planet = () => {
  const classes = useStyles();
  const planet = useAppSelector(displayPlanet)
  const isLoading = useAppSelector(loadingStatus)
  const location = useLocation()
  const dispatch = useAppDispatch()
  const planetId = location.pathname.split("/")[2]
  const noPlanetData = Object.keys(planet).length === 0

  useEffect(() => {
    const getPlanet = () => {
      dispatch(getPlanetData(Number(planetId)))
    }
    noPlanetData && getPlanet()
  },[planetId, dispatch, noPlanetData])

  if(isLoading){
    return (<LoadingSpinner />)
  }
  
  if(noPlanetData){
    return (<Typography variant="body2">No information found</Typography>)
  }

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {planet.title}
          </Typography>
          <Typography variant="subtitle1">
            Terrain: {planet.terrain}
          </Typography>
          <Typography variant="subtitle1">
            Population: {planet.population}
          </Typography>
        </CardContent>
      </div>
      <CardMedia
        className={classes.cover}
        image={`${constants.BASE_IMG_URL}/${constants.PLANETS}/${planet.generated_id}.jpg`}
        title={planet.title}
      />
    </Card>
  );
}

export default Planet
