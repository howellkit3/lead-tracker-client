import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';
import { fetchLead, deleteLead } from '../../actions';

class LeadDelete extends React.Component {
  componentDidMount() {
    this.props.fetchLead(this.props.match.params.id);
  }

  renderActions() {
    const { id } = this.props.match.params;

    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteLead(id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/leads" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.leads) {
      return 'Are you sure you want to delete this contractor?';
    }

    return `Are you sure you want to delete the contractor with name of: ${
      this.props.leads.leadNumber
    }`;
  }

  render() {
    console.log("props", this.props);
    return (
      <Modal
        title="Delete Contractor"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/leads')}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { leads: state.leads[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchLead, deleteLead  }
)(LeadDelete);