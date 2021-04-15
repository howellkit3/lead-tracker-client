import _ from 'lodash';
import {
  FETCH_ADDRESS,
  FETCH_ADDRESSES,
  CREATE_ADDRESS,
  EDIT_ADDRESS,
  DELETE_ADDRESS
} from '../actions/types';

const addressReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_ADDRESSES:
    case EDIT_ADDRESS:
    case CREATE_ADDRESS:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case FETCH_ADDRESS:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case DELETE_ADDRESS:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};

export default addressReducer;