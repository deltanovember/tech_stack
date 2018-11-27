import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

// Reducer = function that returns some amount of data
export default combineReducers({
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer
});
