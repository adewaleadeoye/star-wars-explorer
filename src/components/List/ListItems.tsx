import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { StarWarsProps } from '../../utils/types';
import constants from '../../utils/constants';
import { getListItemType } from '../../utils/helpers';

export type listItemClick = StarWarsProps['listItemClick']

interface Props {
    item: any,
    position: number,
    itemType: string,
    handleListItemClick: listItemClick 
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: '36ch',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
  }),
);

const ListItems = ({item, itemType, position, handleListItemClick}:Props) => {
const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem alignItems="flex-start" button onClick={(event) => handleListItemClick(event, position)}>
        <ListItemAvatar>
          <Avatar alt={item.name ?? item.title} src={`${constants.BASE_IMG_URL}/${getListItemType(itemType)}/${item.generated_id}.jpg`} />
        </ListItemAvatar>
        <ListItemText
          primary={item.name ?? item.title}
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
}

export default ListItems
