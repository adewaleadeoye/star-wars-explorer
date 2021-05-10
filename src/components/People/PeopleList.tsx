import React from 'react';
import { useAppSelector } from '../../app/hooks';
import useStarWarsGroupData from '../../hooks/useStarWarsGroupData';
import constants from '../../utils/constants';
import LoadingSpinner from '../Indicator/LoadingSpinner';
import ListItems from '../List/ListItems';
import Paginator from '../Paginator';
import {
  getPeopleList,
  listPeople,
  loadingStatus,
  pageCount,
  Person,
  setPerson,
} from './peopleSlice';

const PeopleList = () => {
  const people = useAppSelector(listPeople);
  const pages = useAppSelector(pageCount);
  const isLoading = useAppSelector(loadingStatus);

  const { onNavigate, handleListItemClick } = useStarWarsGroupData({
    expectedKey: 'person',
    expectedRoute: 'people',
    getExpectedList: getPeopleList,
    dataSource: people,
    setExpected: setPerson,
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const renderList = people.map((person: Person, index: number) => {
    return (
      <ListItems
        key={index}
        item={person}
        itemType={constants.PEOPLE}
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

export default PeopleList;
