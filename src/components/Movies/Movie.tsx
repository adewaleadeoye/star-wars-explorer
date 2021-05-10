import React, { useEffect } from 'react';
import { Theme, createStyles, makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { displayMovie, getMovieData, loadingStatus } from './moviesSlice';
import { useLocation } from 'react-router-dom';
import constants from '../../utils/constants';
import LoadingSpinner from '../Indicator/LoadingSpinner';

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

const Movie = () => {
  const classes = useStyles();
  const movie = useAppSelector(displayMovie)
  const isLoading = useAppSelector(loadingStatus)
  const location = useLocation()
  const dispatch = useAppDispatch()
  const movieId = location.pathname.split("/")[2]
  const noMovieData = Object.keys(movie).length === 0

  useEffect(() => {
    const getMovie = () => {
      dispatch(getMovieData(Number(movieId)))
    }
    noMovieData && getMovie()
  },[movieId, dispatch, noMovieData])

  if(isLoading){
    return (<LoadingSpinner />)
  }
  
  if(noMovieData){
    return (<Typography variant="body2">No information found</Typography>)
  }

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {movie.title}
          </Typography>
          <Typography variant="subtitle1">
            Director: {movie.director}
          </Typography>
          <Typography variant="subtitle1">
            Producers: {movie.producers}
          </Typography>
          <Typography variant="subtitle1">
            Release Date: {movie.release_date}
          </Typography>
        </CardContent>
      </div>
      <CardMedia
        className={classes.cover}
        image={`${constants.BASE_IMG_URL}/${constants.MOVIES}/${movie.generated_id}.jpg`}
        title={movie.title}
      />
    </Card>
  );
}

export default Movie
