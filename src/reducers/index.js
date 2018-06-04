import { combineReducers } from 'redux';
import stockReducer from './stocksReducer';
import mystockData from './myStocksReducer';

export default combineReducers({
  stocksData: stockReducer,
  mystockData: mystockData
});
