import _ from 'lodash';
import {
  FETCH_AGENT,
  FETCH_AGENTS,
  CREATE_AGENT,
  EDIT_AGENT,
  DELETE_AGENT
} from '../actions/types';

const agentReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_AGENTS:
    case FETCH_AGENT:
    case CREATE_AGENT:
    case EDIT_AGENT:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
      // return { ...state, [action.payload.id]: action.payload };
      // return { ...state, [action.payload.id]: action.payload };
      // return { ...state, [action.payload.id]: action.payload };
    case DELETE_AGENT:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};

export default agentReducer;