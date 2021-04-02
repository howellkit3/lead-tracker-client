import React from 'react';
import { Router, Route } from 'react-router-dom';
import ContractorCreate from './contractors/ContractorCreate'
import ContractorEdit from './contractors/ContractorEdit'
import ContractorDelete from './contractors/ContractorDelete'
import ContractorList from './contractors/ContractorList'
import ContractorShow from './contractors/ContractorShow'
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
                </div>
            </Router>
        </div>
    )
}

export default App;