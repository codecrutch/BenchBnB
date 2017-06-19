import SessionReducer from './session_reducer';
import BenchReducer from './bench_reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  session: SessionReducer,
  benches: BenchReducer
});
