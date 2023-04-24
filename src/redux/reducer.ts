import { combineReducers } from '@reduxjs/toolkit';
import listReducer from '../component/List/reducer';
const rootReducer = combineReducers({
  listReducer: listReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;