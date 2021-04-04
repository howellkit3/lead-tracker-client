import React from 'react';
import { connect } from 'react-redux';
import { createContractor } from '../../actions'
import ContractorForm from './ContractorForm';

class ContractorCreate extends React.Component {

    onSubmit = (formValues) => {
        this.props.createContractor(formValues);
    }
    
    render() {
        return (
            <div>
                <h3>Add new Contractor</h3>
                <ContractorForm onSubmit={this.onSubmit} />
            </div>
        )
    }
}

export default connect(null, { createContractor })(ContractorCreate)