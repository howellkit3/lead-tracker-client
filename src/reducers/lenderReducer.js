import _ from 'lodash';
import {
  FETCH_LENDER,
  FETCH_LENDERS,
  CREATE_LENDER,
  EDIT_LENDER,
  DELETE_LENDER
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_LENDERS:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case FETCH_LENDER:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_LENDER:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_LENDER:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_LENDER:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
