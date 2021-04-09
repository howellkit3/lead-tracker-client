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

            <div className="ui main text container">
                <div className="ui form" >
                    <h4 className="ui dividing header">Add new Address</h4>
                    <div className="field" style={{marginTop: '5%'}}>
                        <AddressForm onSubmit={this.onSubmit} />
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, { createAddress })(AddressCreate)