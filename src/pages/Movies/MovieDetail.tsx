import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  setBackButtonValue,
  setHeaderTitle,
} from '../../components/Layout/Header/headerSlice';
import Movie from '../../components/Movies/Movie';

const MovieDetail = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHeaderTitle({ headerTitle: 'Movies' }));
    dispatch(setBackButtonValue({ backTo: '/movies' }));
  }, [dispatch]);

  return <Movie />;
};

export default MovieDetail;
