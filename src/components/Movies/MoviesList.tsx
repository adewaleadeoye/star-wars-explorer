import React from 'react';
import { useAppSelector } from '../../app/hooks';
import useStarWarsGroupData from '../../hooks/useStarWarsGroupData';
import constants from '../../utils/constants';
import LoadingSpinner from '../Indicator/LoadingSpinner';
import ListItems from '../List/ListItems';
import Paginator from '../Paginator';
import {
  getMoviesList,
  listMovies,
  loadingStatus,
  moviesPageCount,
  Movie,
  setMovie,
} from './moviesSlice';

const MoviesList = () => {
  const movies = useAppSelector(listMovies)
  const pages = useAppSelector(moviesPageCount);
  const isLoading = useAppSelector(loadingStatus)

  const { onNavigate, handleListItemClick } = useStarWarsGroupData({
    expectedKey: 'movie',
    expectedRoute: 'movies',
    getExpectedList: getMoviesList,
    dataSource: movies,
    setExpected: setMovie,
  });

  if(isLoading){
    return (<LoadingSpinner />)
  }

  const renderList = movies.map((movie: Movie, index: number) => {
    return (
      <ListItems
        key={index}
        item={movie}
        itemType={constants.MOVIES}
        position={index}
        handleListItemClick={handleListItemClick}
      />
    );
  });

  return (
    <>
      {renderList}
      <Paginator pages={pages} onNavigate={onNavigate} />
    </>
  );
};

export default MoviesList;
