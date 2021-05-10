import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  setBackButtonValue,
  setHeaderTitle,
} from '../../components/Layout/Header/headerSlice';
import Person from '../../components/People/Person';

const PersonDetail = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHeaderTitle({ headerTitle: 'People' }));
    dispatch(setBackButtonValue({ backTo: '/people' }));
  }, [dispatch]);

  return <Person />;
};

export default PersonDetail;
