import {
  ADD_CONVERSATION,
  CHANGE_VALUE,
  GET_CONVERSATION_ERROR,
  GET_CONVERSATION_PENDING,
  GET_CONVERSATION_SUCCESS,
} from './types';

// contact - string
export const addConversation = (contact) => {
  return {
    type: ADD_CONVERSATION,
    payload: contact,
  };
};

export const changeValue = (id, value) => {
  return {
    type: CHANGE_VALUE,
    payload: {id, value},
  };
};

export const getConversations = () => async (
    dispatch,
    getState,
    request
) => {
  dispatch({type: GET_CONVERSATION_PENDING}); // pending

  console.log('getState => ', getState());

  try {
    const {data} = await request.get('/conversations');

    dispatch({type: GET_CONVERSATION_SUCCESS, payload: data}); // success
  } catch (e) {
    dispatch({type: GET_CONVERSATION_ERROR}); // error
  } finally {
    dispatch({type: 'FINALLY'}); // finally
  }
};
