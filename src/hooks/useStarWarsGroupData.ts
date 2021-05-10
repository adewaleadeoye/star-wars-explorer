import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { listItemClick } from '../components/List/ListItems';
import { onPaginationChangeCallback } from '../components/Paginator';
import { getId } from '../utils/helpers';

const useStarWarsGroupData = ({expectedKey, expectedRoute, getExpectedList, dataSource, setExpected}:any) => {

    const dispatch = useDispatch()
    const history = useHistory()
    const [pageNumber, updatePageNumber] = useState<number>(1);

    useEffect(() => {
        const getData = async () => {
          await dispatch(getExpectedList(pageNumber));
        };
        getData();
      }, [dispatch, pageNumber, getExpectedList]);

      const onNavigate: onPaginationChangeCallback = (evtSource, pageNo) => {
        updatePageNumber(pageNo);
      };

      const handleListItemClick: listItemClick = (e, position) => {
        const generatedId = getId(pageNumber, position)
        const data = dataSource.find((p:any, index:number) => index === position);
        if(data)
        dispatch(
          setExpected({
            [expectedKey]: data,
          })
        );
        history.push(`/${expectedRoute}/${generatedId}`)
      };

      return {pageNumber, onNavigate, handleListItemClick}
}

export default useStarWarsGroupData