import Axios from 'axios';
import { FETCH_STOCK, FETCH_MYSTOCK, FETCH_DETAIL_STOCK} from './types';


export function fetchStock(company){
  const url =`https://api.iextrading.com/1.0/stock/${company}/batch?types=company,chart&range=1m&last=1`;
  const request = Axios.get(url);
  return {
   type: FETCH_STOCK,
   payload: request
  }
};

export function fetchMyStock(){
  const url ='https://api.iextrading.com/1.0/stock/market/batch?symbols=aapl,fb,tsla,msft,amd,aft&types=company,chart&range=1m&last=1';
  const request = Axios.get(url);
  return {
   type: FETCH_MYSTOCK,
   payload: request
  }
};
