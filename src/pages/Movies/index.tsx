import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  setHeaderTitle,
  setBackButtonValue,
} from '../../components/Layout/Header/headerSlice';
import { Box } from '@material-ui/core';
import MoviesList from '../../components/Movies/MoviesList';

const Movies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHeaderTitle({ headerTitle: 'Movies' }));
    dispatch(setBackButtonValue({ backTo: '/' }));
  }, [dispatch]);

  return (
    <Box>
      <MoviesList />
    </Box>
  );
};

export default Movies;
