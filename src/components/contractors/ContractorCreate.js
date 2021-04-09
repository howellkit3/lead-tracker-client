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
            <div className="ui main text container">
                <div className="ui form" >
                    <h4 className="ui dividing header">Add new Contractor</h4>
                    <div className="field" style={{marginTop: '5%'}}>
                        <ContractorForm onSubmit={this.onSubmit} />
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, { createContractor })(ContractorCreate)