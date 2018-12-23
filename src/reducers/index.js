import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer,
});
