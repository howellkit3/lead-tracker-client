import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ContractorCreate from './contractors/ContractorCreate'
import ContractorEdit from './contractors/ContractorEdit'
import ContractorDelete from './contractors/ContractorDelete'
import ContractorList from './contractors/ContractorList'
import ContractorShow from './contractors/ContractorShow'
import Header from './Header';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Header />
                    <Route path="/contractor" exact component={ContractorList} />
                    <Route path="/contractor/new" exact component={ContractorCreate} />
                    <Route path="/contractor/edit" exact component={ContractorEdit} />
                    <Route path="/contractor/delete" exact component={ContractorDelete} />
                    <Route path="/contractor/show" exact component={ContractorShow} />
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;