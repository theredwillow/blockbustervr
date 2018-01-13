import { combineReducers, createStore } from 'redux';

// actions.js
export const moveSide = shelf => ({
  type: 'MOVE_SIDE',
  shelf
});



// reducers.js
export const devTesting = (state=[], action) => {
  switch (action.type) {

  case 'MOVE_SIDE':
    return action.shelf;

  default:
    return state;

  }

}

export const reducers = combineReducers({ devTesting });



// store.js
export function configureStore(initialState={}) {  
  const store = createStore(reducers, initialState);
  return store;
};

export const store = configureStore();
