import merge from 'lodash/merge';
import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS
} from '../actions/session_actions';

const defaultState = Object.freeze({
  currentUser: null,
  errors: []
});

const sessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  debugger
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, action.currentUser);
    case RECEIVE_ERRORS:
      return merge({}, state, action.errors);
    default:
      return state;
  }
};


export default sessionReducer;