import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import contractorReducer from './contractorReducer';
import lenderReducer from './lenderReducer';
import agentReducer from './agentReducer';
import addressReducer from './addressReducer';

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    contractors: contractorReducer,
    lenders: lenderReducer,
    agents: agentReducer,
    addresses: addressReducer
})