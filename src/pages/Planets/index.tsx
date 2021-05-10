import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  setHeaderTitle,
  setBackButtonValue,
} from '../../components/Layout/Header/headerSlice';
import { Box } from '@material-ui/core';
import PlanetsList from '../../components/Planets/PlanetsList'

const Movies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHeaderTitle({ headerTitle: 'Planets' }));
    dispatch(setBackButtonValue({ backTo: '/' }));
  }, [dispatch]);

  return (
    <Box>
      <PlanetsList />
    </Box>
  );
};

export default Movies;
