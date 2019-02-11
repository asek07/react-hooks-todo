import {useReducer} from 'react';
import { init } from 'events';

const initialState = {
  count: 0
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'add':
      return {
        ...state,
        count: state.count + 1
      }
    case 'subtract':
      if(state.count != 0) {
        return {
          ...state,
          count: state.count -1
        }
      }
    case 'reset':
      return initialState;
    default: 
      return initialState;
  }
}

export const counterReducer = () => {
  return useReducer(reducer, initialState);
}