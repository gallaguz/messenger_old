import {createReducer} from 'utils';
import {
  GET_MESSAGE_ERROR,
  GET_MESSAGE_PENDING,
  GET_MESSAGE_SUCCESS,
  MESSAGE_SEND,
} from './types';

const initialState = {
  messages: {},
  messagesPending: false,
  error: null,
};

export const messagesReducer = createReducer(initialState, {
  [MESSAGE_SEND]: (state, {payload}) => ({
    ...state,
    messages: {
      ...state.messages,
      [payload.roomId]: [
        ...(state.messages[payload.roomId] || []),
        {
          author: payload.author,
          message: payload.message,
          createdTs: new Date(),
        },
      ],
    },
  }),
  [GET_MESSAGE_PENDING]: (state) => ({
    ...state,
    messagesPending: true,
  }),
  [GET_MESSAGE_SUCCESS]: (state, {payload}) => ({
    ...state,
    messagesPending: false,
    messages: {
      ...state.messages,
      [payload.roomId]: payload.messages,
    },
  }),
  [GET_MESSAGE_ERROR]: (state, {payload}) => ({
    ...state,
    messagesPending: false,
    error: payload,
  }),
});
