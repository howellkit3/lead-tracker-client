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
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case FETCH_CONTRACTOR:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_CONTRACTOR:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_CONTRACTOR:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_CONTRACTOR:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};

export default contractorReducer;