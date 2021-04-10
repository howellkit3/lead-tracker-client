import api from '../apis/api';
import login from '../apis/login';
import logout from '../apis/logout';
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
  CREATE_LEAD,
  FETCH_LEAD,
  FETCH_LEADS,
  EDIT_LEAD,
  DELETE_LEAD
} from './types';

  export const signIn = userEmail => async dispatch => {
    let response = false;
    response = await login.post('/login', userEmail);
    const token = response.data.access_token;
    console.log("************* RESPONSE", response);
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
    const options = {
      headers: {
        'Authorization' : `Bearer ${sessionStorage.getItem('access_token')}`
      } 
    }

    const response = await api.get('getAllData/contractors', options);
    dispatch({ type: FETCH_CONTRACTORS, payload: response.data });
  };

  export const fetchContractor = (id) => async dispatch => {
    const options = {
      headers: {
        'Authorization' : `Bearer ${sessionStorage.getItem('access_token')}`
      } 
    }
    const response = await api.get(`getData/contractors/${id}`, options)
    dispatch( {type: FETCH_CONTRACTOR, payload: response.data});
  }

  export const editContractor = (id, formValues) => async dispatch => {
    const options = {
      headers: {
        'Authorization' : `Bearer ${sessionStorage.getItem('access_token')}`
      } 
    }
    formValues['id'] = id;
    const response = await api.put(`updateData/contractors/${id}`, formValues, options);
    dispatch({ type: EDIT_CONTRACTOR, payload: response.data });
    history.push('/contractors');
  };

  export const deleteContractor = (id) => async dispatch => {
    const options = {
      headers: {
        'Authorization' : `Bearer ${sessionStorage.getItem('access_token')}`
      } 
    }
    let formValues = [];
    formValues['id'] = id;
    formValues['status'] = 0;
    const response = await api.put(`updateData/contractors/${id}`, formValues, options);
    dispatch({ type: DELETE_CONTRACTOR, payload: id });
    history.push('/contractors');
  }

// LENDERS
  export const createLender = formValues => async dispatch => {
    const options = {
      headers: {
        'Authorization' : `Bearer ${sessionStorage.getItem('access_token')}`
      } 
    }

    const response = await api.post('addNewData/lenders',  formValues, options)
    dispatch( {type: CREATE_LENDER, payload: response.data});
    history.push('/lenders');
  }

  export const fetchLenders = () => async dispatch => {
    const options = {
      headers: {
        'Authorization' : `Bearer ${sessionStorage.getItem('access_token')}`
      } 
    }

    const response = await api.get('getAllData/lenders', options);
    dispatch({ type: FETCH_LENDERS, payload: response.data });
  };

  export const fetchLender = (id) => async dispatch => {
    const options = {
      headers: {
        'Authorization' : `Bearer ${sessionStorage.getItem('access_token')}`
      } 
    }
    const response = await api.get(`getData/lenders/${id}`, options)
    dispatch( {type: FETCH_LENDER, payload: response.data});
  }

  export const editLender = (id, formValues) => async dispatch => {
    const options = {
      headers: {
        'Authorization' : `Bearer ${sessionStorage.getItem('access_token')}`
      } 
    }

    formValues['id'] = id;
    const response = await api.put(`updateData/lenders/${id}`, formValues, options);
    dispatch({ type: EDIT_LENDER, payload: response.data });
    history.push('/lenders');
  };

  export const deleteLender = (id) => async dispatch => {
    const options = {
      headers: {
        'Authorization' : `Bearer ${sessionStorage.getItem('access_token')}`
      } 
    }

    let formValues = [];
    formValues['id'] = id;
    formValues['status'] = 0;
    const response = await api.put(`updateData/lenders/${id}`, formValues, options);
    dispatch({ type: DELETE_LENDER, payload: id });
    history.push('/lenders');
  }

// AGENTS
  export const createAgent = formValues => async dispatch => {
    const options = {
      headers: {
        'Authorization' : `Bearer ${sessionStorage.getItem('access_token')}`
      } 
    }

    const response = await api.post('addNewData/agents',  formValues, options)
    dispatch( {type: CREATE_AGENT, payload: response.data});
    history.push('/agents');
  }

  export const fetchAgents = () => async dispatch => {
    const options = {
      headers: {
        'Authorization' : `Bearer ${sessionStorage.getItem('access_token')}`
      } 
    }
    const response = await api.get('getAllData/agents', options);
    dispatch({ type: FETCH_AGENTS, payload: response.data });
  };

  export const fetchAgent = (id) => async dispatch => {
    const options = {
      headers: {
        'Authorization' : `Bearer ${sessionStorage.getItem('access_token')}`
      } 
    }
    const response = await api.get(`getData/agents/${id}`, options)
    dispatch( {type: FETCH_AGENT, payload: response.data});
  }

  export const editAgent = (id, formValues) => async dispatch => {
    const options = {
      headers: {
        'Authorization' : `Bearer ${sessionStorage.getItem('access_token')}`
      } 
    }

    formValues['id'] = id;
    const response = await api.put(`updateData/agents/${id}`, formValues, options);
    dispatch({ type: EDIT_AGENT, payload: response.data });
    history.push('/agents');
  };

  export const deleteAgent = (id) => async dispatch => {
    const options = {
      headers: {
        'Authorization' : `Bearer ${sessionStorage.getItem('access_token')}`
      } 
    }

    let formValues = [];
    formValues['id'] = id;
    formValues['status'] = 0;
    const response = await api.put(`updateData/agents/${id}`, formValues, options);
    dispatch({ type: DELETE_AGENT, payload: id });
    history.push('/agents');
  }

// LEADS
export const createLead = formValues => async dispatch => {
  const options = {
    headers: {
      'Authorization' : `Bearer ${sessionStorage.getItem('access_token')}`
    } 
  }
  const response = await api.post('addNewData/leads', formValues, options);
  dispatch({ type: CREATE_LEAD, payload: response.data });
  history.push('/leads');
}

export const fetchLeads = (params) => async dispatch => {
  const options = {
    headers: {
      'Authorization' : `Bearer ${sessionStorage.getItem('access_token')}`
    } 
  }

  const response = await api.get('/getAllData/leads', options);
  
  dispatch({ type: FETCH_LEADS, payload: response.data});
}

export const fetchLead = (id) => async dispatch => {
  const options = {
    headers: {
      'Authorization' : `Bearer ${sessionStorage.getItem('access_token')}`
    } 
  }

  const response = await api.get(`/getData/leads/${id}`, options);
  dispatch( {type: FETCH_LEAD, payload: response.data[0]});
}

export const editLead = (id, formValues) => async dispatch => {
  const options = {
    headers: {
      'Authorization' : `Bearer ${sessionStorage.getItem('access_token')}`
    } 
  }

  const response = await api.put(`/updateData/leads/${id}`, formValues, options)
  dispatch( {type: EDIT_LEAD, payload: response.data});
  history.push('/leads');
}

export const deleteLead = (id) => async dispatch => {

  const options = {
    headers: {
      'Authorization' : `Bearer ${sessionStorage.getItem('access_token')}`
    } 
  }

  await api.delete(`deleteData/leads/${id}`, options);
  // dispatch({ type: DELETE_LEAD, payload: id });
  history.push('/leads');
  
}

// ADDRESSES
export const createAddress = formValues => async dispatch => {
  const options = {
    headers: {
      'Authorization' : `Bearer ${sessionStorage.getItem('access_token')}`
    } 
  }
  const response = await api.post('addNewData/addresses',  formValues, options)
  dispatch( {type: CREATE_ADDRESS, payload: response.data});
  history.push('/addresses');
}

export const fetchAddresses = () => async dispatch => {
  const options = {
    headers: {
      'Authorization' : `Bearer ${sessionStorage.getItem('access_token')}`
    } 
  }
  const response = await api.get('getAllData/addresses', options);
  dispatch({ type: FETCH_ADDRESSES, payload: response.data });
};

export const fetchAddress = (id) => async dispatch => {
  const options = {
    headers: {
      'Authorization' : `Bearer ${sessionStorage.getItem('access_token')}`
    } 
  }
  const response = await api.get(`getData/addresses/${id}`, options)
  dispatch( {type: FETCH_ADDRESS, payload: response.data});
}

export const editAddress = (id, formValues) => async dispatch => {
  const options = {
    headers: {
      'Authorization' : `Bearer ${sessionStorage.getItem('access_token')}`
    } 
  }
  formValues['id'] = id;
  const response = await api.put(`updateData/addresses/${id}`, formValues, options);
  dispatch({ type: EDIT_ADDRESS, payload: response.data });
  history.push('/addresses');
};

export const deleteAddress = (id) => async dispatch => {
  const options = {
    headers: {
      'Authorization' : `Bearer ${sessionStorage.getItem('access_token')}`
    } 
  }
  
  let formValues = [];
  formValues['id'] = id;
  formValues['status'] = 0;
  console.log(formValues);
  const response = await api.put(`updateData/addresses/${id}`, formValues, options);
  dispatch({ type: DELETE_ADDRESS, payload: id });
  history.push('/addresses');
}