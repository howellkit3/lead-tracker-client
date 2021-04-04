import React from 'react';
import { connect } from 'react-redux';
import { createLender } from '../../actions'
import LenderForm from './LenderForm';

class LenderCreate extends React.Component {

    onSubmit = (formValues) => {
        this.props.createLender(formValues);
    }
    
    render() {
        return (
            <div>
                <h3>Add new Lender</h3>
                <LenderForm onSubmit={this.onSubmit} />
            </div>
        )
    }
}

export default connect(null, { createLender })(LenderCreate)