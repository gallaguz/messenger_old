import classNames from 'classnames';
import {format} from 'date-fns';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './message.module.css';

export const Message = (props) => {
  const {
    message: {message, author, createdTs},
  } = props;

  return (
    <div
      className={classNames(styles.message, {
        [styles.currentMessage]: author === 'User',
      })}
    >
      {/* eslint-disable-next-line react/prop-types */}
      <h3>{message}</h3>
      <p>{author}</p>
      <p>{format(new Date(createdTs), 'HH:mm:ss')}</p>
    </div>
  );
};

Message.propTypes = {
  message: PropTypes.shape({
    message: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    createdTs: PropTypes.any,

  }),
};
