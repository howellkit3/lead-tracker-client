import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchAddress, editAddress } from '../../actions'
import AddressForm from './AddressForm';
class AddressEdit extends React.Component {

    componentDidMount() {
        this.props.fetchAddress(this.props.match.params.id);
    }

    onSubmit = formValues => {
        this.props.editAddress(this.props.match.params.id, formValues);
    };

    render() {
        if (!this.props.address) {
          return <div>Loading...</div>;
        }
    
        return (
          <div className="ui main text container">
            <div className="ui form" >
                <h4 className="ui dividing header">Edit an Address</h4>
                <div className="field" style={{marginTop: '5%'}}>
                 <AddressForm
                    initialValues={_.pick(this.props.address, 'address')}
                    onSubmit={this.onSubmit}/>
                </div>
            </div>
          </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { address: state.addresses[ownProps.match.params.id]  };
}

export default connect(
    mapStateToProps,
    { fetchAddress, editAddress } 
    )(AddressEdit);