import React, { useEffect } from 'react'
import PeopleList from '../../components/People/PeopleList'
import { useDispatch } from 'react-redux';
import { setHeaderTitle, setBackButtonValue } from '../../components/Layout/Header/headerSlice';
import { Box } from '@material-ui/core';

const People:React.FC = () => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(setHeaderTitle({headerTitle: "People"}))
        dispatch(setBackButtonValue({backTo: "/"}))
    }, [dispatch])

    return (
        <Box>
        <PeopleList />
        </Box>
    )
}

export default People