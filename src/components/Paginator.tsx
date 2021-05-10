import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { StarWarsProps } from '../utils/types';

export type onPaginationChangeCallback = StarWarsProps['onPaginationChange'];

interface Props {
  pages: number;
  onNavigate?: onPaginationChangeCallback;
}

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const Paginator = ({ pages, onNavigate }: Props) => {
  console.log("pages", pages)
  const classes = useStyles();

  if (pages === 0) {
    return <></>;
  }

  return (
    <div className={classes.root}>
      <Pagination
        count={pages}
        showFirstButton
        showLastButton
        onChange={onNavigate}
      />
    </div>
  );
};
export default Paginator;
