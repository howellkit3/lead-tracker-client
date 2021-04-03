import React from 'react';
import { Router, Route } from 'react-router-dom';

import ContractorCreate from './contractors/ContractorCreate'
import ContractorEdit from './contractors/ContractorEdit'
import ContractorDelete from './contractors/ContractorDelete'
import ContractorList from './contractors/ContractorList'
import ContractorShow from './contractors/ContractorShow'

import LenderCreate from './lenders/LenderCreate'
// import LenderEdit from './lenders/LenderEdit'
// import LenderDelete from './lenders/LenderDelete'
import LenderList from './lenders/LenderList'
// import LenderShow from './lenders/LenderShow'

import AgentCreate from './agents/AgentCreate'
// import LenderEdit from './agents/LenderEdit'
// import LenderDelete from './agents/LenderDelete'
import AgentList from './agents/AgentList'
// import LenderShow from './agents/LenderShow'

import AddressCreate from './addresses/AddressCreate'
// import AddressEdit from './addresses/AddressEdit'
// import AddressDelete from './addresses/AddressDelete'
import AddressList from './addresses/AddressList'
// import AddressShow from './addresses/AddressShow'

import Header from './Header';
import history from '../history';

const App = () => {
    return (
        <div>
            <Router history={history}>
                <div>
                    <Header />
                    <Route path="/contractors" exact component={ContractorList} />
                    <Route path="/contractors/new" exact component={ContractorCreate} />
                    <Route path="/contractors/edit/:id" exact component={ContractorEdit} />
                    <Route path="/contractors/delete/:id" exact component={ContractorDelete} />
                    <Route path="/contractors/show" exact component={ContractorShow} />

                    <Route path="/lenders" exact component={LenderList} />
                    <Route path="/lenders/new" exact component={LenderCreate} />
                    {/* <Route path="/lenders/edit/:id" exact component={ContractorEdit} />
                    <Route path="/lenders/delete/:id" exact component={ContractorDelete} />
                    <Route path="/lenders/show" exact component={ContractorShow} /> */}

                    <Route path="/addresses" exact component={AddressList} />
                    <Route path="/addresses/new" exact component={AddressCreate} />
                    {/* <Route path="/addresses/edit/:id" exact component={ContractorEdit} />
                    <Route path="/addresses/delete/:id" exact component={ContractorDelete} />
                    <Route path="/addresses/show" exact component={ContractorShow} /> */}

                    <Route path="/agents" exact component={AgentList} />
                    <Route path="/agents/new" exact component={AgentCreate} />
                    {/* <Route path="/agents/edit/:id" exact component={ContractorEdit} />
                    <Route path="/agents/delete/:id" exact component={ContractorDelete} />
                    <Route path="/agents/show" exact component={ContractorShow} /> */}
                </div>
            </Router>
        </div>
    )
}

export default App;