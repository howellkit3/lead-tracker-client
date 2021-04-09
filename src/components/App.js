import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './login/Login';

import ProtectedApp from './protectedApp/ProtectedApp';


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

const App = (props) => {
    return (
        <div className="background">
            <Router history={history}>
                <div >
                    <Header />
                    <Route path="/" exact component={() => <Login user={props.isSignedIn} /> } />

                    {/* Following routes to secure */}

                    {/* <Route path="/dashboard" exact component={Dashboard} /> */}
                    <ProtectedApp path="/dashboard" exact user={props.isSignedIn} component={Dashboard}/>

                    {/* <Route path="/contractors" exact component={ContractorList} />
                    <Route path="/contractors/new" exact component={ContractorCreate} />
                    <Route path="/contractors/edit/:id" exact component={ContractorEdit} />
                    <Route path="/contractors/delete/:id" exact component={ContractorDelete} /> */}
                    {/* <Route path="/contractors/show" exact component={ContractorShow} /> */}
                    <ProtectedApp path="/contractors" exact user={props.isSignedIn} component={ContractorList}/>
                    <ProtectedApp path="/contractors/new" exact user={props.isSignedIn} component={ContractorCreate}/>
                    <ProtectedApp path="/contractors/edit/:id" exact user={props.isSignedIn} component={ContractorEdit}/>
                    <ProtectedApp path="/contractors/delete/:id" exact user={props.isSignedIn} component={ContractorDelete}/>

                    {/* <Route path="/lenders" exact component={LenderList} />
                    <Route path="/lenders/new" exact component={LenderCreate} />
                    <Route path="/lenders/edit/:id" exact component={LenderEdit} />
                    <Route path="/lenders/delete/:id" exact component={LenderDelete} /> */}
                    {/* <Route path="/lenders/show" exact component={ContractorShow} /> */}
                    <ProtectedApp path="/lenders" exact user={props.isSignedIn} component={LenderList} />
                    <ProtectedApp path="/lenders/new" exact user={props.isSignedIn} component={LenderCreate} />
                    <ProtectedApp path="/lenders/edit/:id" exact user={props.isSignedIn} component={LenderEdit} />
                    <ProtectedApp path="/lenders/delete:/:id" exact user={props.isSignedIn} component={LenderDelete} />


                    {/* <Route path="/addresses" exact component={AddressList} />
                    <Route path="/addresses/new" exact component={AddressCreate} />
                    <Route path="/addresses/edit/:id" exact component={AddressEdit} />
                    <Route path="/addresses/delete/:id" exact component={AddressDelete} /> */}
                    {/* <Route path="/addresses/show" exact component={ContractorShow} /> */}
                    <ProtectedApp path="/addresses" exact user={props.isSignedIn} component={AddressList} />
                    <ProtectedApp path="/addresses/new" exact user={props.isSignedIn} component={AddressCreate} />
                    <ProtectedApp path="/addresses/edit/:id" exact user={props.isSignedIn} component={AddressEdit} />
                    <ProtectedApp path="/addresses/delete/:id" exact user={props.isSignedIn} component={AddressDelete} />

                    {/* <Route path="/agents" exact component={AgentList} />
                    <Route path="/agents/new" exact component={AgentCreate} /> */}
                    {/*<Route path="/agents/edit/:id" exact component={AgentEdit} />
                    <Route path="/agents/delete/:id" exact component={AgentDelete} />
                    <Route path="/agents/show" exact component={ContractorShow} /> */}
                    <ProtectedApp path="/agents" exact user={props.isSignedIn} component={AgentList} />
                    <ProtectedApp path="/agents/new" exact user={props.isSignedIn} component={AgentCreate} />
                    <ProtectedApp path="/agents/edit/:id" exact user={props.isSignedIn} component={AgentEdit} />
                    <ProtectedApp path="/agents/delete/:id" exact user={props.isSignedIn} component={AgentDelete} />


                    {/* <Route path="/leads" exact component={LeadList} />
                    <Route path="/leads/sort/:id" exact component={LeadList} />
                    <Route path="/leads/new" exact component={LeadCreate} />
                    <Route path="/leads/edit/:id" exact component={LeadEdit} />
                    <Route path="/leads/delete/:id" exact component={LeadDelete} /> */}
                    <ProtectedApp path="/leads" exact user={props.isSignedIn} component={LeadList} />
                    <ProtectedApp path="/leads/sort/:id" exact user={props.isSignedIn} component={LeadList} />
                    <ProtectedApp path="/leads/new" exact user={props.isSignedIn} component={LeadCreate} />
                    <ProtectedApp path="/leads/edit/:id" exact user={props.isSignedIn} component={LeadEdit} />
                    <ProtectedApp path="/leads/delete/:id" exact user={props.isSignedIn} component={LeadDelete} />


                    {/* <Route path="/agents/show" exact component={ContractorShow} /> */}
                </div>
            </Router>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isSignedIn: state.auth.isSignedIn
      };
  };
  
  
  export default connect(
    mapStateToProps,
    null
  )(App);