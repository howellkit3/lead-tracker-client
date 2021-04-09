import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';
import { fetchAgent, deleteAgent } from '../../actions';

class AgentDelete extends React.Component {
  componentDidMount() {
    this.props.fetchAgent(this.props.match.params.id);
  }

  renderActions() {
    const { id } = this.props.match.params;

    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteAgent(id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/agents" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.agents) {
      return 'Are you sure you want to delete this agent?';
    }

    return `Are you sure you want to delete the agent with first name of: ${
      this.props.agents.first_name
    }`;
  }

  render() {
    return (
      <Modal
        title="Delete Agent"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/agents')}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { agents: state.agents[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchAgent, deleteAgent  }
)(AgentDelete);
