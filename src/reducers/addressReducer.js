import _ from 'lodash';
import {
  FETCH_ADDRESS,
  FETCH_ADDRESSES,
  CREATE_ADDRESS,
  EDIT_ADDRESS,
  DELETE_ADDRESS
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_ADDRESSES:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case FETCH_ADDRESS:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_ADDRESS:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_ADDRESS:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_ADDRESS:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
