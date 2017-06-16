import SessionReducer from './session_reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  session: SessionReducer
});

// const rootReducer = combineReducers({
//   session: SessionReducer
// });
//
// export default rootReducer;
