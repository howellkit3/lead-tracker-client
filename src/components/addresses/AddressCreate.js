import React from 'react';
import { connect } from 'react-redux';
import { createAddress } from '../../actions'
import AddressForm from './AddressForm';

class AddressCreate extends React.Component {

    onSubmit = (formValues) => {
        this.props.createAddress(formValues);
    }
    
    render() {
        return (
            <div>
                <h3>Add new Address</h3>
                <AddressForm onSubmit={this.onSubmit} />
            </div>
        )
    }
}

export default connect(null, { createAddress })(AddressCreate)