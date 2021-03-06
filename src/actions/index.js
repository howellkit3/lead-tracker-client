import api from '../apis/api';
import login from '../apis/login';
import logout from '../apis/logout';
import history from '../history';
import { toast } from "react-toastify";
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
  DELETE_LEAD,
  CREATE_TITLE_COMPANY,
  FETCH_TITLE_COMPANY,
  FETCH_TITLE_COMPANIES,
  EDIT_TITLE_COMPANY,
  DELETE_TITLE_COMPANY
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
    toast.success("Contractor was successfully added!");
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
    toast.success("Contractor was successfully updated!");
    dispatch({ type: EDIT_CONTRACTOR, payload: response.data });
    history.push('/contractors');
  };

  export const deleteContractor = (id) => async dispatch => {
    const options = {
      headers: {
        'Authorization' : `Bearer ${sessionStorage.getItem('access_token')}`
      } 
    }
    await api.delete(`deleteData/contractors/${id}`, options);
    toast.success("Contractor was successfully removed!");
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
    toast.success("Lender was successfully added!" );
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
    toast.success("Lender was successfully updated!");
    dispatch({ type: EDIT_LENDER, payload: response.data });
    history.push('/lenders');
  };

  export const deleteLender = (id) => async dispatch => {
    const options = {
      headers: {
        'Authorization' : `Bearer ${sessionStorage.getItem('access_token')}`
      } 
    }

    await api.delete(`deleteData/lenders/${id}`, options);
    toast.success("Lender was successfully removed!");
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
    toast.success("Agent was successfully added!");
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
    toast.success("Agent was successfully updated!");
    dispatch({ type: EDIT_AGENT, payload: response.data });
    history.push('/agents');
  };

  export const deleteAgent = (id) => async dispatch => {
    const options = {
      headers: {
        'Authorization' : `Bearer ${sessionStorage.getItem('access_token')}`
      } 
    }

    await api.delete(`deleteData/agents/${id}`, options);
    toast.success("Agent was successfully removed!");
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
  toast.success("Lead was successfully added!");
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
  toast.success("Lead was successfully updated!");
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
  toast.success("Lead was successfully removed!");
  dispatch({ type: DELETE_LEAD, payload: id });
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
  toast.success("Address was successfully Added!");
  dispatch( {type: CREATE_ADDRESS, payload: response.data});
  history.push('/addresses');
}

export const fetchAddresses = () => async dispatch => {
  // const options = {
  //   headers: {
  //     'Authorization' : `Bearer ${sessionStorage.getItem('access_token')}`
  //   } 
  // }
  // const response = await api.get('getAllData/addresses', options);
  // dispatch({ type: FETCH_ADDRESSES, payload: response.data });
};

export const fetchAddress = (id) => async dispatch => {
  // const options = {
  //   headers: {
  //     'Authorization' : `Bearer ${sessionStorage.getItem('access_token')}`
  //   } 
  // }
  // const response = await api.get(`getData/addresses/${id}`, options)
  // dispatch( {type: FETCH_ADDRESS, payload: response.data});
}

export const editAddress = (id, formValues) => async dispatch => {
  const options = {
    headers: {
      'Authorization' : `Bearer ${sessionStorage.getItem('access_token')}`
    } 
  }
  formValues['id'] = id;
  const response = await api.put(`updateData/addresses/${id}`, formValues, options);
  toast.success("Address was successfully updated!");
  dispatch({ type: EDIT_ADDRESS, payload: response.data });
  history.push('/addresses');
};

export const deleteAddress = (id) => async dispatch => {
  const options = {
    headers: {
      'Authorization' : `Bearer ${sessionStorage.getItem('access_token')}`
    } 
  }
  
  await api.delete(`deleteData/addresses/${id}`, options);
  toast.success("Address was successfully removed!");
  dispatch({ type: DELETE_ADDRESS, payload: id });
  history.push('/addresses');
}

//TODO ADD TITLE COMPANY

export const createTitleCompany = formValues => async dispatch => {
  const options = {
    headers: {
      'Authorization' : `Bearer ${sessionStorage.getItem('access_token')}`
    } 
  }
  const response = await api.post('addNewData/title_companies', formValues, options);
  toast.success("Company was successfully added!");
  dispatch({ type: CREATE_TITLE_COMPANY, payload: response.data });
  history.push('/title_companies');
}

export const fetchTitleCompanies = (params) => async dispatch => {
  const options = {
    headers: {
      'Authorization' : `Bearer ${sessionStorage.getItem('access_token')}`
    } 
  }

  const response = await api.get('/getAllData/title_companies', options);
  
  dispatch({ type: FETCH_TITLE_COMPANIES, payload: response.data});
}

export const fetchTitleCompany = (id) => async dispatch => {
  const options = {
    headers: {
      'Authorization' : `Bearer ${sessionStorage.getItem('access_token')}`
    } 
  }

  const response = await api.get(`/getData/title_companies/${id}`, options);
  dispatch( {type: FETCH_TITLE_COMPANY, payload: response.data[0]});
}

export const editTitleCompany = (id, formValues) => async dispatch => {
  const options = {
    headers: {
      'Authorization' : `Bearer ${sessionStorage.getItem('access_token')}`
    } 
  }

  const response = await api.put(`/updateData/title_companies/${id}`, formValues, options)
  toast.success("Company was successfully updated!");
  dispatch( {type: EDIT_TITLE_COMPANY, payload: response.data});
  history.push('/title_companies');
}

export const deleteTitleCompany = (id) => async dispatch => {
  const options = {
    headers: {
      'Authorization' : `Bearer ${sessionStorage.getItem('access_token')}`
    } 
  }

  await api.delete(`deleteData/title_companies/${id}`, options);
  toast.success("Company was successfully removed!");
  dispatch({ type: DELETE_TITLE_COMPANY, payload: id });
  history.push('/title_companies');
}