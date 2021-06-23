

export const logger = (store) => (next) => (action) => {
  console.log('Prev state', store.getState());
  console.log('Dispatching', action);
  const result = next(action);
  console.log('Next state', store.getState());

  return result;
};
