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
            <Link to={`/addresses/edit/${address.id}`} className="ui button primary">Edit</Link>
            <Link to={`/addresses/delete/${address.id}`} className="ui button negative">Delete</Link>
        </div>
    );
  }



  renderList() {
    const addressType = ['Construction', 'On Market', 'Problem', 'Lis Pendens'];
    return this.props.addresses.map(address => {
      if(address.id) {
        return (
            <tr key={address.id}>
              <td>{address.address}</td>
              <td>{addressType[address.type - 1]}</td>
              <td>{this.renderAdmin(address)}</td>
            </tr>
        );
      }

      return null
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

      <div className="ui main text container">
        <div className="ui grid">
          <div className="four wide column">
            <h2>Address</h2>
          </div>
          <div className="twelve wide column right aligned">
            {this.renderCreate()}
          </div>
          <div className="sixteen wide column">
            <table className="ui left aligned striped celled table">
              <thead>
                <tr>
                  <th>Address</th>
                  <th>Type</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.renderList()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { 
      addresses: Object.values(state.addresses).reverse(),
      isSignedIn: state.auth.isSignedIn
    };
};


export default connect(
  mapStateToProps,
  { fetchAddresses }
)(AddressList);
