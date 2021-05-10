import React from 'react';
import { useAppSelector } from '../../app/hooks';
import useStarWarsGroupData from '../../hooks/useStarWarsGroupData';
import constants from '../../utils/constants';
import LoadingSpinner from '../Indicator/LoadingSpinner';
import ListItems from '../List/ListItems';
import Paginator from '../Paginator';
import {
  getPlanetsList,
  listPlanets,
  loadingStatus,
  Planet,
  planetsPageCount,
  setPlanet,
} from './planetsSlice';

const PlanetsList = () => {
  const planets = useAppSelector(listPlanets);
  const pages = useAppSelector(planetsPageCount);
  const isLoading = useAppSelector(loadingStatus);

  const { onNavigate, handleListItemClick } = useStarWarsGroupData({
    expectedKey: 'planet',
    expectedRoute: 'planets',
    getExpectedList: getPlanetsList,
    dataSource: planets,
    setExpected: setPlanet,
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const renderList = planets.map((planet: Planet, index: number) => {
    return (
      <ListItems
        key={index}
        item={planet}
        itemType={constants.PLANETS}
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

export default PlanetsList;
