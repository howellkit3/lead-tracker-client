import contractors from '../apis/contractors';
import history from '../history';
import { 
  SIGN_IN, 
  SIGN_OUT, 
  CREATE_CONTRACTOR,
  FETCH_CONTRACTOR,
  FETCH_CONTRACTORS,
  DELETE_CONTRACTOR,
  EDIT_CONTRACTOR,
} from './types';

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
    const response = await contractors.post('addNewData/contractors',  formValues)

    dispatch( {type: CREATE_CONTRACTOR, payload: response.data});
    history.push('/contractors');
  }

  export const fetchContractors = () => async dispatch => {
    const response = await contractors.get('getAllData/contractors');

    dispatch({ type: FETCH_CONTRACTORS, payload: response.data });
  };

  export const fetchContractor = (id) => async dispatch => {
    const response = await contractors.get(`getData/contractors/${id}`)

    dispatch( {type: FETCH_CONTRACTOR, payload: response.data});
  }

  // export const editContractor = (id, formValues) => async dispatch => {
  //   const response = await contractors.put(`/contractors/${id}`)

  //   dispatch( {type: EDIT_CONTRACTOR, payload: response.data});
  // }

  // export const deleteContractor = (id) => async dispatch => {
  //   const response = await contractors.delete(`/contractors/${id}`)

  //   dispatch( {type: DELETE_CONTRACTOR, payload: id});
  // }