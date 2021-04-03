import _ from 'lodash';
import {
  FETCH_AGENT,
  FETCH_AGENTS,
  CREATE_AGENT,
  EDIT_AGENT,
  DELETE_AGENT
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_AGENTS:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case FETCH_AGENT:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_AGENT:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_AGENT:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_AGENT:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
