import React, { useEffect } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { displayPerson, getPersonData, loadingStatus } from './peopleSlice';
import constants from '../../utils/constants';
import { useLocation } from 'react-router-dom';
import LoadingSpinner from '../Indicator/LoadingSpinner';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
      flexGrow: 2
    },
    media: {
      height: 240,
    },
  })
);

const Person = () => {
  const classes = useStyles();
  const person = useAppSelector(displayPerson);
  const isLoading = useAppSelector(loadingStatus);
  const location = useLocation();
  const dispatch = useAppDispatch();
  //setup to retrieve data from api just in case person info is not in redux store
  const personId = location.pathname.split('/')[2];
  const personHasNoData = Object.keys(person).length === 0;

  useEffect(() => {
    const getPerson = () => {
      dispatch(getPersonData(Number(personId)));
    };
    personHasNoData && getPerson();
  }, [personId, dispatch, personHasNoData]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (personHasNoData) {
    return <Typography variant="body2">No information found</Typography>;
  }

  return (
    <Card className={classes.root}>
      {/* <CardActionArea> */}
        <CardMedia
          className={classes.media}
          image={`${constants.BASE_IMG_URL}/${constants.PEOPLE_IMG}/${person.generated_id}.jpg`}
          title={person.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {person.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Height: {person.height}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Mass: {person.mass}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Hair Color: {person.hair_color}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Skin Color: {person.skin_color}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Gender: {person.gender}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Year of Birth: {person.birth_year}
          </Typography>
        </CardContent>
      {/* </CardActionArea> */}
    </Card>
  );
};

export default Person;
