import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';
import { fetchContractor, deleteContractor } from '../../actions';

class ContractorDelete extends React.Component {
  componentDidMount() {
    this.props.fetchContractor(this.props.match.params.id);
  }

  renderActions() {
    const { id } = this.props.match.params;
    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteContractor(id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/contractors" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.contractors) {
      return 'Are you sure you want to delete this contractor?';
    }

    return `Are you sure you want to delete the contractor with name of: ${
      this.props.contractors.contractor_name
    }`;
  }

  render() {
    console.log("props", this.props);
    return (
      <Modal
        title="Delete Contractor"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/contractors')}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { contractors: state.contractors[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchContractor, deleteContractor  }
)(ContractorDelete);
