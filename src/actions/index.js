import contractors from '../apis/contractors';
import { SIGN_IN, SIGN_OUT, CREATE_CONTRACTOR } from './types';

export const signIn = (userId) => {
    return {
      type: SIGN_IN,
      payload: userId
    };
  };
  
  export const signOut = () => {
    return {
      type: SIGN_OUT
    };
  };
  
  export const createContractor = formValues => async dispatch => {
    const response = await contractors.post('/contractors', formValues)

    dispatch( {type: CREATE_CONTRACTOR, payload: response.data});
  }

  