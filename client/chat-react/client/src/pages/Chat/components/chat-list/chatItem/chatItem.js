import {
  ListItem,
  ListItemIcon,
  ListItemText,
  withStyles,
} from '@material-ui/core';
import {AccountCircle} from '@material-ui/icons';
import {format} from 'date-fns';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './chatItem.module.css';

const StyledListItem = withStyles(() => ({
  root: {
    '&.Mui-selected': {
      backgroundColor: '#2b5278',
    },
    '&.Mui-selected:hover': {
      backgroundColor: '#2b5278',
    },
  },
}))(ListItem);

export const ChatItem = ({selected, title, lastMessage, handleNavigate}) => {
  return (
    <StyledListItem
      button={true}
      selected={selected}
      onClick={handleNavigate}
    >
      <ListItemIcon>
        <AccountCircle fontSize="large" className={styles.icon} />
      </ListItemIcon>
      <div className={styles.description}>
        <ListItemText className={styles.text} primary={title} />
        {lastMessage ? (
          <>
            <ListItemText className={styles.text}
              primary={`${lastMessage.author}: ${lastMessage.message}`} />
            <ListItemText
              className={styles.text}
              primary={format(
                  new Date(lastMessage.createdTs),
                  'HH:mm:ss'
              )}
            />
          </>
        ) : (
          <ListItemText className={styles.text} primary='No messages' />
        )}
      </div>
    </StyledListItem>
  );
};

ChatItem.propTypes = {
  title: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  lastMessage: PropTypes.any,
  handleNavigate: PropTypes.func.isRequired,
};
