import _ from 'lodash'
import {
  FETCH_MYSTOCK
} from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_MYSTOCK:
      return _.mapValues(action.payload.data, "chart", "company");
    default:
      return state;
  }
}
