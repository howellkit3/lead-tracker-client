import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAddresses } from '../../actions';

class AddressList extends React.Component {
  componentDidMount() {
    this.props.fetchAddresses();
  }

  renderAdmin(address) {
    return (
        <div className="right floated content">
            <Link to={`/address/edit/${address.id}`} className="ui button primary">Edit</Link>
            <Link to={`/address/delete/${address.id}`} className="ui button negative">Delete</Link>
        </div>
    );
  }

  renderAddressType(type) {
    if( type===1 ) {
      return "Construction";
    } else if ( type===2 ) {
      return "On Market";
    } else if ( type===3 ) {
      return "Problem";
    } else if ( type===4) {
      return "Lis Pendens";
    } else {
      return "unknown";
    }
  }

  renderList() {
    return this.props.addresses.map(address => {
      if(address.id) {
        return (
          <div className="item" key={address.id}>
          {this.renderAdmin(address)}
            <i className="large middle aligned icon map marker" />
            <div className="content">
              {address.address }
                <div className="description">
                  {this.renderAddressType(address.type)}
                </div>
            </div>
          </div>
        );
      }
  
    });
  }

  renderCreate() {
      // if (this.props.isSignedIn) {
            return (
              <div>
                <Link to="/addresses/new" className="ui button primary">
                    Create Address
                </Link>
              </div>
            )
      // }
  }

  render() {
    return (
      <div>
        <h2>Address</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { 
      addresses: Object.values(state.addresses),
      isSignedIn: state.auth.isSignedIn
    };
};


export default connect(
  mapStateToProps,
  { fetchAddresses }
)(AddressList);
