import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAgents } from '../../actions';

class AgentList extends React.Component {
  componentDidMount() {
    this.props.fetchAgents();
  }

  renderAdmin(agent) {
    return (
        <div className="right floated content">
            <Link to={`/agents/edit/${agent.id}`} className="ui button primary">Edit</Link>
            <Link to={`/agents/delete/${agent.id}`} className="ui button negative">Delete</Link>
        </div>
    );
  }

  renderList() {
    return this.props.agents.map(agent => {
      if(agent.id) {
        return (
          <div className="item" key={agent.id}>
          {this.renderAdmin(agent)}
            <i className="large middle aligned icon user" />
            <div className="content">
              {agent.first_name } { agent.middle_name }, { agent.last_name }
              <div className="description">
                  {agent.email}
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
                <Link to="/agents/new" className="ui button primary">
                    Create Agent
                </Link>
              </div>
            )
      // }
  }

  render() {
    return (
      <div>
        <h2>Agents</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { 
      agents: Object.values(state.agents),
      isSignedIn: state.auth.isSignedIn
    };
};


export default connect(
  mapStateToProps,
  { fetchAgents }
)(AgentList);
