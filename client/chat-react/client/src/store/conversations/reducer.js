import {createReducer} from 'utils';
import {
  ADD_CONVERSATION,
  CHANGE_VALUE,
  GET_CONVERSATION_ERROR,
  GET_CONVERSATION_PENDING,
  GET_CONVERSATION_SUCCESS,
} from './types';

const initialState = {
  conversations: [],
  conversationsPending: false,
  error: null,
};

export const conversationsReducer = createReducer(initialState, {
  [ADD_CONVERSATION]: (state, {payload}) => ({
    ...state,
    conversations: [...state.conversations, {title: payload, value: ''}],
  }),
  [CHANGE_VALUE]: (state, {payload}) => ({
    ...state,
    conversations: state.conversations.map((room) =>
      room.title === payload.id ? {...room, value: payload.value} : room,
    ),
  }),
  [GET_CONVERSATION_PENDING]: (state) => ({
    ...state,
    conversationsPending: true,
  }),
  [GET_CONVERSATION_SUCCESS]: (state, {payload}) => ({
    ...state,
    conversations: payload,
    conversationsPending: false,
  }),
  [GET_CONVERSATION_ERROR]: (state, {payload}) => ({
    ...state,
    conversationsPending: false,
    error: payload,
  }),
});
