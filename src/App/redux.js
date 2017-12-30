import { combineReducers, createStore } from 'redux';

// actions.js
/*
export const changeRoom = img => ({
  type: 'CHANGE_ROOM',
  img
});



// reducers.js
export const room = (state=[], action) => {
  switch (action.type) {

  case 'CHANGE_ROOM':
    let roomName = action.img.match(/media\/(.*)?\..*?\..{3}$/i)[1];
    let audio = sounds.find(function(s){ return s.includes(roomName); });
    if (audio) {
      audio = new Audio(audio);
      audio.play();
    }
    return action.img;

  default:
    return state;

  }

}
*/
export const reducers = combineReducers({ /*room*/ });



// store.js
export function configureStore(initialState={}) {  
  const store = createStore(reducers, initialState);
  return store;
};

export const store = configureStore();
