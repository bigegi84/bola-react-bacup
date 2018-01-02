import { combineReducers } from 'redux'
import Dinamis from "./Dinamis";
import LocalStorage from "./LocalStorage";
const store = combineReducers({
  Dinamis,
  LocalStorage
});
export default store