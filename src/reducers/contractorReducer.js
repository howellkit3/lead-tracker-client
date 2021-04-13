import _ from 'lodash';
import {
  FETCH_CONTRACTOR,
  FETCH_CONTRACTORS,
  CREATE_CONTRACTOR,
  EDIT_CONTRACTOR,
  DELETE_CONTRACTOR
} from '../actions/types';

const contractorReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_CONTRACTORS:
    case FETCH_CONTRACTOR:
    case CREATE_CONTRACTOR:
    case EDIT_CONTRACTOR:
    case DELETE_CONTRACTOR:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
      // return { ...state, [action.payload.id]: action.payload };
      // return { ...state, [action.payload.id]: action.payload };
      // return { ...state, [action.payload.id]: action.payload };
      // return _.omit(state, action.payload);
    default:
      return state;
  }
};

export default contractorReducer;