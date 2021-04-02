import contractors from '../apis/contractors';
import login from '../apis/login';
import logout from '../apis/logout';
import { SIGN_IN, SIGN_OUT, CREATE_CONTRACTOR } from './types';

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
  
  export const createContractor = formValues => async dispatch => {
    const options = {
      headers: {
        'Authorization' : `Bearer ${sessionStorage.getItem('access_token')}`
      } 
    }
    const response = await contractors.post('/addNewData/contractors', formValues, options);

    dispatch( {type: CREATE_CONTRACTOR, payload: response.data});
  }

  