import React from 'react';
import { Router, Route } from 'react-router-dom';

import Login from './login/Login';


import ContractorCreate from './contractors/ContractorCreate'
import ContractorEdit from './contractors/ContractorEdit'
import ContractorDelete from './contractors/ContractorDelete'
import ContractorList from './contractors/ContractorList'
// import ContractorShow from './contractors/ContractorShow'

import LenderCreate from './lenders/LenderCreate'
import LenderEdit from './lenders/LenderEdit'
import LenderDelete from './lenders/LenderDelete'
import LenderList from './lenders/LenderList'

import AgentCreate from './agents/AgentCreate'
import AgentEdit from './agents/AgentEdit'
import AgentDelete from './agents/AgentDelete'
import AgentList from './agents/AgentList'

import AddressCreate from './addresses/AddressCreate'
import AddressEdit from './addresses/AddressEdit'
import AddressDelete from './addresses/AddressDelete'
import AddressList from './addresses/AddressList'

import LeadCreate from './leads/LeadCreate'
import LeadEdit from './leads/LeadEdit'
import LeadDelete from './leads/LeadDelete'
import LeadList from './leads/LeadList'

import Dashboard from './dashboard/Dashboard'

import Header from './Header';
import history from '../history';

const App = () => {
    return (
        <div className="background">
            <Router history={history}>
                <div >
                    <Header />
                    <Route path="/" exact component={Login} />

                    {/* Following routes to secure */}
                    <Route path="/dashboard" exact component={Dashboard} />
                    <Route path="/contractors" exact component={ContractorList} />
                    <Route path="/contractors/new" exact component={ContractorCreate} />
                    <Route path="/contractors/edit/:id" exact component={ContractorEdit} />
                    <Route path="/contractors/delete/:id" exact component={ContractorDelete} />
                    {/* <Route path="/contractors/show" exact component={ContractorShow} /> */}

                    <Route path="/lenders" exact component={LenderList} />
                    <Route path="/lenders/new" exact component={LenderCreate} />
                    <Route path="/lenders/edit/:id" exact component={LenderEdit} />
                    <Route path="/lenders/delete/:id" exact component={LenderDelete} />
                    {/* <Route path="/lenders/show" exact component={ContractorShow} /> */}

                    <Route path="/addresses" exact component={AddressList} />
                    <Route path="/addresses/new" exact component={AddressCreate} />
                    <Route path="/addresses/edit/:id" exact component={AddressEdit} />
                    <Route path="/addresses/delete/:id" exact component={AddressDelete} />
                    {/* <Route path="/addresses/show" exact component={ContractorShow} /> */}

                    <Route path="/agents" exact component={AgentList} />
                    <Route path="/agents/new" exact component={AgentCreate} />

                    {/* <Route path="/agents/edit/:id" exact component={ContractorEdit} />
                    <Route path="/agents/delete/:id" exact component={ContractorDelete} />
                    <Route path="/agents/show" exact component={ContractorShow} /> */}

                    <Route path="/leads" exact component={LeadList} />
                    <Route path="/leads/sort/:id" exact component={LeadList} />
                    <Route path="/leads/new" exact component={LeadCreate} />
                    <Route path="/leads/edit/:id" exact component={LeadEdit} />
                    <Route path="/leads/delete/:id" exact component={LeadDelete} />

                    <Route path="/agents/edit/:id" exact component={AgentEdit} />
                    <Route path="/agents/delete/:id" exact component={AgentDelete} />
                    {/* <Route path="/agents/show" exact component={ContractorShow} /> */}
                </div>
            </Router>
        </div>
    )
}

export default App;