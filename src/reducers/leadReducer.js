import _ from 'lodash';
import {
  FETCH_LEAD,
  FETCH_LEADS,
  CREATE_LEAD,
  EDIT_LEAD,
  DELETE_LEAD
} from '../actions/types';

const INITIAL_DATA = {
    data : [],
    selectedLead : {}
}

export default (state = INITIAL_DATA, action) => {
    switch (action.type) {
      case FETCH_LEADS:
        return {
            ...state,
            data : action.payload
        }
      case FETCH_LEAD:
        return { 
            ...state,
            selectedLead: action.payload
         };
      case CREATE_LEAD:
        return { ...state.leads, [action.payload.id]: action.payload };
      case EDIT_LEAD:
        return { ...state.leads, [action.payload.id]: action.payload };
      case DELETE_LEAD:
        return _.omit(state.leads, action.payload);
      default:
        return state;
    }
  };
  