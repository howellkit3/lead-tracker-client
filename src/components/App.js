import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Login from './login/Login';

import ProtectedApp from './protectedApp/ProtectedApp';

import ContractorCreate from './contractors/ContractorCreate'
import ContractorEdit from './contractors/ContractorEdit'
import ContractorDelete from './contractors/ContractorDelete'
import ContractorList from './contractors/ContractorList'

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

import TitleCompanyCreate from './titleCompany/TitleCompanyCreate'
import TitleCompanyEdit from './titleCompany/TitleCompanyEdit'
import TitleCompanyDelete from './titleCompany/TitleCompanyDelete'
import TitleCompanyList from './titleCompany/TitleCompanyList'

import Dashboard from './dashboard/Dashboard'

import Header from './Header';
import history from '../history';

const App = (props) => {
    return (
        <div className="background" style={{ flex: 1, minHeight: '100vh', minWidth: '100vw', backgroundColor: '#FFFF' }}>
            <Router history={history}>
                <div >
                    <Header user={props.isSignedIn} />
                    <Route path="/" exact component={() => <Login user={props.isSignedIn} /> } />
                    {/* Following routes to secure */}

                    <ProtectedApp path="/dashboard" exact user={props.isSignedIn} component={Dashboard} />

                    <ProtectedApp path="/contractors" exact user={props.isSignedIn} component={ContractorList} />
                    <ProtectedApp path="/contractors/new" exact user={props.isSignedIn} component={ContractorCreate} />
                    <ProtectedApp path="/contractors/edit/:id" exact user={props.isSignedIn} component={ContractorEdit} />
                    <ProtectedApp path="/contractors/delete/:id" exact user={props.isSignedIn} component={ContractorDelete} />

                    <ProtectedApp path="/lenders" exact user={props.isSignedIn} component={LenderList} />
                    <ProtectedApp path="/lenders/new" exact user={props.isSignedIn} component={LenderCreate} />
                    <ProtectedApp path="/lenders/edit/:id" exact user={props.isSignedIn} component={LenderEdit} />
                    <ProtectedApp path="/lenders/delete/:id" exact user={props.isSignedIn} component={LenderDelete} />

                    <ProtectedApp path="/addresses" exact user={props.isSignedIn} component={AddressList} />
                    <ProtectedApp path="/addresses/new" exact user={props.isSignedIn} component={AddressCreate} />
                    <ProtectedApp path="/addresses/edit/:id" exact user={props.isSignedIn} component={AddressEdit} />
                    <ProtectedApp path="/addresses/delete/:id" exact user={props.isSignedIn} component={AddressDelete} />

                    <ProtectedApp path="/agents" exact user={props.isSignedIn} component={AgentList} />
                    <ProtectedApp path="/agents/new" exact user={props.isSignedIn} component={AgentCreate} />
                    <ProtectedApp path="/agents/edit/:id" exact user={props.isSignedIn} component={AgentEdit} />
                    <ProtectedApp path="/agents/delete/:id" exact user={props.isSignedIn} component={AgentDelete} />

                    <ProtectedApp path="/title_companies" exact user={props.isSignedIn} component={TitleCompanyList} />
                    <ProtectedApp path="/title_companies/new" exact user={props.isSignedIn} component={TitleCompanyCreate} />
                    <ProtectedApp path="/title_companies/edit/:id" exact user={props.isSignedIn} component={TitleCompanyEdit} />
                    <ProtectedApp path="/title_companies/delete/:id" exact user={props.isSignedIn} component={TitleCompanyDelete} />

                    <ProtectedApp path="/leads" exact user={props.isSignedIn} component={LeadList} />
                    <ProtectedApp path="/leads/sort/:id" exact user={props.isSignedIn} component={LeadList} />
                    <ProtectedApp path="/leads/new" exact user={props.isSignedIn} component={LeadCreate} />
                    <ProtectedApp path="/leads/edit/:id" exact user={props.isSignedIn} component={LeadEdit} />
                    <ProtectedApp path="/leads/delete/:id" exact user={props.isSignedIn} component={LeadDelete} />
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