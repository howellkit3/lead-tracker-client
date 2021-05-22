//TODO
import _ from 'lodash';
import {
  FETCH_TITLE_COMPANY,
  FETCH_TITLE_COMPANIES,
  CREATE_TITLE_COMPANY,
  EDIT_TITLE_COMPANY,
  DELETE_TITLE_COMPANY
} from '../actions/types';

const titleCompanyReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_TITLE_COMPANIES:
      return { ...state, ..._.mapKeys(action.payload, '_id') }
    case FETCH_TITLE_COMPANY:
      return { ...state, ..._.mapKeys(action.payload, '_id')};
    case CREATE_TITLE_COMPANY:
      return { ...state, ..._.mapKeys(action.payload, '_id')};
    case EDIT_TITLE_COMPANY:
      return { ...state, ..._.mapKeys(action.payload, '_id')};
    case DELETE_TITLE_COMPANY:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};

export default titleCompanyReducer;
  