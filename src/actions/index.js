import api from '../apis/api';
import history from '../history';
import { 
  SIGN_IN, 
  SIGN_OUT, 
  CREATE_CONTRACTOR,
  FETCH_CONTRACTOR,
  FETCH_CONTRACTORS,
  DELETE_CONTRACTOR,
  EDIT_CONTRACTOR,
  CREATE_LENDER,
  FETCH_LENDERS,
  FETCH_LENDER,
  DELETE_LENDER,
  EDIT_LENDER,
  CREATE_AGENT,
  FETCH_AGENTS,
  FETCH_AGENT,
  DELETE_AGENT,
  EDIT_AGENT,
  CREATE_ADDRESS,
  FETCH_ADDRESSES,
  FETCH_ADDRESS,
  DELETE_ADDRESS,
  EDIT_ADDRESS,
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
  
  // CONTRACTORS

  export const createContractor = formValues => async dispatch => {
    const response = await api.post('addNewData/contractors',  formValues)

    dispatch( {type: CREATE_CONTRACTOR, payload: response.data});
    history.push('/contractors');
  }

  export const fetchContractors = () => async dispatch => {
    const response = await api.get('getAllData/contractors');

    dispatch({ type: FETCH_CONTRACTORS, payload: response.data });
  };

  export const fetchContractor = (id) => async dispatch => {
    const response = await api.get(`getData/contractors/${id}`)

    dispatch( {type: FETCH_CONTRACTOR, payload: response.data});
  }

  // export const editContractor = (id, formValues) => async dispatch => {
  //   const response = await contractors.patch(`/streams/${id}`, formValues);

  //   dispatch({ type: EDIT_CONTRACTOR, payload: response.data });
  //   history.push('/contractors');
  // }

  // export const deleteContractor = (id) => async dispatch => {
  //   await contractors.delete(`/contractors/${id}`);

  //   dispatch({ type: DELETE_CONTRACTOR, payload: id });
  //   history.push('/contractors');
  // }

// LENDERS
  export const createLender = formValues => async dispatch => {
    const response = await api.post('addNewData/lenders',  formValues)

    dispatch( {type: CREATE_LENDER, payload: response.data});
    history.push('/lenders');
  }

  export const fetchLenders = () => async dispatch => {
    const response = await api.get('getAllData/lenders');

    dispatch({ type: FETCH_LENDERS, payload: response.data });
  };

// AGENTS
  export const createAgent = formValues => async dispatch => {
    const response = await api.post('addNewData/agents',  formValues)

    dispatch( {type: CREATE_AGENT, payload: response.data});
    history.push('/agents');
  }

  export const fetchAgents = () => async dispatch => {
    const response = await api.get('getAllData/agents');

    dispatch({ type: FETCH_AGENTS, payload: response.data });
  };

  
// ADDRESSES
export const createAddress = formValues => async dispatch => {
  const response = await api.post('addNewData/addresses',  formValues)

  dispatch( {type: CREATE_ADDRESS, payload: response.data});
  history.push('/addresses');
}

export const fetchAddresses = () => async dispatch => {
  const response = await api.get('getAllData/addresses');

  dispatch({ type: FETCH_ADDRESSES, payload: response.data });
};