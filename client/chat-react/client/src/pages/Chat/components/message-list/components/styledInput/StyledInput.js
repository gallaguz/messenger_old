import {Input, withStyles, InputAdornment} from '@material-ui/core';
import {Send} from '@material-ui/icons';
import React from 'react';
import styles from './input.module.css';

const InputWithStyles = withStyles(() => {
  return {
    root: {
      '&': {
        color: '#9a9fa1',
        padding: '10px 15px',
        fontSize: '15px',
      },
    },
  };
})(Input);

// eslint-disable-next-line react/prop-types
export const StyledInput = ({handleEvent, value, inputRef}) => {
  return (
    <InputWithStyles
      inputRef={inputRef}
      fullWidth={true}
      value={value}
      onChange={handleEvent}
      onKeyPress={handleEvent}
      placeholder="Введите сообщение..."
      endAdornment={
        value && (
          <InputAdornment position="end">
            <Send
              className={styles.icon}
              onClick={handleEvent}
            />
          </InputAdornment>
        )
      }
    />
  );
};

