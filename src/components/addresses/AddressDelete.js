import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';
import { fetchAddress, deleteAddress } from '../../actions';

class AddressDelete extends React.Component {
  componentDidMount() {
    this.props.fetchAddress(this.props.match.params.id);
  }

  renderActions() {
    const { id } = this.props.match.params;

    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteAddress(id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/addresses" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.addresses) {
      return 'Are you sure you want to delete this address?';
    }

    return `Are you sure you want to delete the address with name of: ${
      this.props.addresses.address
    }`;
  }

  render() {
    console.log("props", this.props);
    return (
      <Modal
        title="Delete Address"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/addresses')}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { addresses: state.addresses[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchAddress, deleteAddress  }
)(AddressDelete);
