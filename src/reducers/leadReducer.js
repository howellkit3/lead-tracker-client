import _ from 'lodash';
import {
  FETCH_LEAD,
  FETCH_LEADS,
  CREATE_LEAD,
  EDIT_LEAD,
  DELETE_LEAD
} from '../actions/types';

const leadReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_LEADS:
      return { ...state, ..._.mapKeys(action.payload, '_id') }
    case FETCH_LEAD:
      return { ...state, ..._.mapKeys(action.payload, '_id')};
    case CREATE_LEAD:
      return { ...state, ..._.mapKeys(action.payload, '_id')};
    case EDIT_LEAD:
      return { ...state, ..._.mapKeys(action.payload, '_id')};
    case DELETE_LEAD:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};

export default leadReducer;
  