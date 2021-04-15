import _ from 'lodash';
import {
  FETCH_LENDER,
  FETCH_LENDERS,
  CREATE_LENDER,
  EDIT_LENDER,
  DELETE_LENDER
} from '../actions/types';

const lenderReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_LENDERS:
    case FETCH_LENDER:
    case CREATE_LENDER:
    case EDIT_LENDER:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
      // return { ...state, [action.payload.id]: action.payload };
      // return { ...state, [action.payload.id]: action.payload };
      // return { ...state, [action.payload.id]: action.payload };
    case DELETE_LENDER:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};

export default lenderReducer;