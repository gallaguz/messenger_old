import {
  GET_MESSAGE_ERROR,
  GET_MESSAGE_PENDING,
  GET_MESSAGE_SUCCESS,
  MESSAGE_SEND,
} from './types';

// params {author, message, roomId}
export const sendMessage = (params) => {
  return {
    type: MESSAGE_SEND,
    payload: params,
  };
};

export const getMessagesById = (roomId) => async (
    dispatch,
    getState,
    request,
) => {
  dispatch({type: GET_MESSAGE_PENDING});
  try {
    const {data} = await request.get(`/messages/${roomId}`);
    dispatch({type: GET_MESSAGE_SUCCESS, payload: data});
  } catch {
    dispatch({type: GET_MESSAGE_ERROR});
  }
};
