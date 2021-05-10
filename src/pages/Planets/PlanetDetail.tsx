import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  setBackButtonValue,
  setHeaderTitle,
} from '../../components/Layout/Header/headerSlice';
import Planet from '../../components/Planets/Planet';


const PlanetDetail = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHeaderTitle({ headerTitle: 'Planets' }));
    dispatch(setBackButtonValue({ backTo: '/planets' }));
  }, [dispatch]);

  return <Planet />;
};

export default PlanetDetail;
