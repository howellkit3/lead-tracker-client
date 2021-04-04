import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';
import { fetchLender, deleteLender } from '../../actions';

class LenderDelete extends React.Component {
  componentDidMount() {
    this.props.fetchLender(this.props.match.params.id);
  }

  renderActions() {
    const { id } = this.props.match.params;

    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteLender(id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/lenders" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.lenders) {
      return 'Are you sure you want to delete this lender?';
    }

    return `Are you sure you want to delete the lender with name of: ${
      this.props.lenders.lender_name
    }`;
  }

  render() {
    console.log("props", this.props);
    return (
      <Modal
        title="Delete Lender"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/lenders')}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { lenders: state.lenders[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchLender, deleteLender  }
)(LenderDelete);
