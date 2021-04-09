import api from '../apis/api';
import login from '../apis/login';
import logout from '../apis/logout';
import history from '../history';
import _ from 'lodash';
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
  CREATE_LEAD,
  FETCH_LEAD,
  FETCH_LEADS,
  DELETE_LEAD,
  EDIT_LEAD,
} from './types';

  export const signIn = userEmail => async dispatch => {
    let response = false;
    response = await login.post('/login', userEmail);
    const token = response.data.access_token;
    //WILL RETURN ERROR MESSAGE inside response.data.message, response.status != 200 login failed
    sessionStorage.setItem("access_token", token); //STORE TOKEN TO SESSION STORAGE (WILL CHANGE IT)

    dispatch( {
      type: response.status === 200 ? SIGN_IN : SIGN_OUT,
      payload: token
    })
   
  };

  export const signOut = () => async dispatch => {
    await logout.post('/logout');
    sessionStorage.removeItem('access_token'); //REMOVE SESSION STORAGE
    dispatch({type : SIGN_OUT});
  };
  
  // CONTRACTORS
  export const createContractor = formValues => async dispatch => {
    const options = {
      headers: {
        'Authorization' : `Bearer ${sessionStorage.getItem('access_token')}`
      } 
    }
    const response = await api.post('/addNewData/contractors', formValues, options);
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

  export const editContractor = (id, formValues) => async dispatch => {
    formValues['id'] = id;
    const response = await api.put(`updateData/contractors/${id}`, formValues);
    dispatch({ type: EDIT_CONTRACTOR, payload: response.data });
    history.push('/contractors');
  };

  export const deleteContractor = (id) => async dispatch => {
    await api.delete(`deleteData/contractors/${id}`);
    dispatch({ type: DELETE_CONTRACTOR, payload: id });
    history.push('/contractors');
  }

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

  export const fetchLender = (id) => async dispatch => {
    const response = await api.get(`getData/lenders/${id}`)
    dispatch( {type: FETCH_LENDER, payload: response.data});
  }

  export const editLender = (id, formValues) => async dispatch => {
    formValues['id'] = id;
    const response = await api.put(`updateData/lenders/${id}`, formValues);
    dispatch({ type: EDIT_LENDER, payload: response.data });
    history.push('/lenders');
  };

  export const deleteLender = (id) => async dispatch => {
    await api.delete(`deleteData/lenders/${id}`);
    dispatch({ type: DELETE_LENDER, payload: id });
    history.push('/lenders');
  }

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

  export const fetchAgent = (id) => async dispatch => {
    const response = await api.get(`getData/agents/${id}`)
    dispatch( {type: FETCH_AGENT, payload: response.data});
  }

  export const editAgent = (id, formValues) => async dispatch => {
    formValues['id'] = id;
    const response = await api.put(`updateData/agents/${id}`, formValues);
    dispatch({ type: EDIT_AGENT, payload: response.data });
    history.push('/agents');
  };

  export const deleteAgent = (id) => async dispatch => {
    await api.delete(`deleteData/agents/${id}`);
    dispatch({ type: DELETE_AGENT, payload: id });
    history.push('/agents');
  }

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

// LEADS
export const createLead = formValues => async dispatch => {
  const response = await api.post('addNewData/leads', formValues);
  dispatch({ type: CREATE_LEAD, payload: response.data });
  history.push('/leads');
 
}

export const fetchLeads = () => async dispatch => {
  const response = await api.get('/getAllData/leads');

  dispatch({ type: FETCH_LEADS, payload: response.data });
}

export const fetchLead = (id) => async dispatch => {
  const response = await api.get(`/getData/leads/${id}`);
  dispatch( {type: FETCH_LEAD, payload: response.data[0]});
}

export const editLead = (id, formValues) => async dispatch => {
  const response = await api.put(`/updateData/leads/${id}`, formValues)
  dispatch( {type: EDIT_LEAD, payload: response.data});
  history.push('/leads');

}

export const deleteLead = (id) => async dispatch => {
  await api.delete(`deleteData/leads/${id}`);
  // dispatch({ type: DELETE_LEAD, payload: id });
  history.push('/leads');

export const fetchAddress = (id) => async dispatch => {
  const response = await api.get(`getData/addresses/${id}`)
  dispatch( {type: FETCH_ADDRESS, payload: response.data});
}

export const editAddress = (id, formValues) => async dispatch => {
  formValues['id'] = id;
  const response = await api.put(`updateData/addresses/${id}`, formValues);
  dispatch({ type: EDIT_ADDRESS, payload: response.data });
  history.push('/addresses');
};

export const deleteAddress = (id) => async dispatch => {
  await api.delete(`deleteData/addresses/${id}`);
  dispatch({ type: DELETE_ADDRESS, payload: id });
  history.push('/addresses');
}