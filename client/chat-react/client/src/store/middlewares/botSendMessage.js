import {MESSAGE_SEND, sendMessage} from '../messages';

//  3 time call
// export const botSendMessage = (
// {dispatch, getState(), subscribe()}
// ) => (next) => ({type, payload}) => {
export const botSendMessage = (store) => (next) => (action) => {
  if (action.type === MESSAGE_SEND) {
    if (action.payload.author !== 'Bot') {
      setTimeout(() => {
        store.dispatch(sendMessage({
          author: 'Bot',
          message: 'I am bot',
          roomId: action.payload.roomId,
        }));
      }, 500);
    }
  }

  return next(action);
};
