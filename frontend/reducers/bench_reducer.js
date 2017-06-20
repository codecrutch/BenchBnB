import {
  RECEIVE_ALL_BENCHES,
  RECEIVE_BENCH
} from '../actions/bench_actions';
import { merge } from 'lodash';

const defaultState = {};

const BenchReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_BENCHES:
      newState = merge({}, state, action.benches);
      return newState;
    case RECEIVE_BENCH:
      newState = merge({}, state);
      newState[action.bench.id] = action.bench;
      return newState;
    default:
      return state;
  }
}


export default BenchReducer;
window.merge = merge;
